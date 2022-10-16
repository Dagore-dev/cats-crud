import { apiURL } from '../db/api.js'

async function getCatsContains(query) {
  const response = await window.fetch(`${apiURL}/cats?q=${query}`)
  const cats = await response.json()

  return cats
}

export {
  getCatsContains
}
