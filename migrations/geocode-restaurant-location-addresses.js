import "dotenv/config"
import axios from "axios"
import migrate from "./_base"

const API_KEY = process.env.GOOGLE_API_KEY

const delay = interval => new Promise(resolve => setTimeout(resolve, interval))

const geocodeAddress = async address => {
  const encodedAddress = encodeURIComponent(address)
  await delay(100) // avoid OVER_QUOTA errors from Google API

  const { results, status } = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`
    )
    .then(response => response.data)

  if (status !== "OK") throw new Error(`Something went wrong: ${status}`)

  switch (results.length) {
    case 0:
      throw new Error(`No results found for ${address}`)
    case 1:
      return results[0]
    default:
      console.warn(`Multiple results found for ${address}; using the first.`)
      return results[0]
  }
}

migrate(
  {
    conditions: [
      "_type == 'restaurant'",
      "!(_id in path('drafts.**'))",
      "defined(locations)",
      "defined(locations[].address)",
      "count(locations[!defined(geoLocation)]) > 0",
    ],
    fields: [
      "'name': title",
      "locations[!defined(geoLocation)] { _key, address }",
    ],
    limit: 10, // avoid OVER_QUOTA errors from Google
  },
  async ({ name, locations }) => {
    const patches = await Promise.all(
      locations.map(async loc => {
        const geoData = await geocodeAddress(loc.address)
        if (!geoData) return null
        return [
          [
            `locations..[_key == "${loc._key}"].rawGeodata`,
            JSON.stringify(geoData),
          ],
          [
            `locations..[_key == "${loc._key}"].address`,
            geoData.formatted_address,
          ],
          [
            `locations..[_key == "${loc._key}"].geoLocation`,
            {
              _type: "geopoint",
              ...geoData.geometry.location,
            },
          ],
        ]
      })
    )

    return {
      _operation: "patch",
      props: {
        set: patches
          .flat()
          .filter(x => x)
          .reduce((acc, [k, v] = []) => {
            if (!k) return acc
            acc[k] = v
            return acc
          }, {}),
      },
    }
  }
)
