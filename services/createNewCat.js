import { apiURL } from '../db/api.js'
import { getAllCats } from './getAllCats.js'

async function createNewCat(name, age, breed) {
  await window.fetch(`${apiURL}/cats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, breed })
  })

  return await getAllCats()
}

export {
  createNewCat
}
