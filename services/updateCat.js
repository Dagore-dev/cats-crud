import { apiURL } from '../db/api.js'
import { getAllCats } from "./getAllCats.js"

async function updateCat(id, name, age, breed) {
  await window.fetch(`${apiURL}/cats/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, breed })
  })

  return await getAllCats()
}

export {
  updateCat
}
