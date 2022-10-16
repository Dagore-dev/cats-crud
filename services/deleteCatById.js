import { apiURL } from '../db/api.js'

async function deleteCatById(id) {
  await window.fetch(`${apiURL}/cats/${id}`, {
    method: 'DELETE'
  })
}

export {
  deleteCatById
}
