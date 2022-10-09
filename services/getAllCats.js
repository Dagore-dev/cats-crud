import { apiURL } from '../db/api.js'

async function getAllCats() {
  const response = await window.fetch(`${apiURL}/cats`)
  const cats = await response.json()

  return cats
}

export {
  getAllCats
}
