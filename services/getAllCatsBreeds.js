import { apiURL } from '../db/api.js'

async function getAllCatsBreeds() {
  const response = await window.fetch(`${apiURL}/cats-breeds`)
  const catsBreeds = await response.json()

  return catsBreeds
}

export {
  getAllCatsBreeds
}
