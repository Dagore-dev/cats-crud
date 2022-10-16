import { deleteCatById } from '../services/deleteCatById.js'
import { getAllCats } from '../services/getAllCats.js'

/**
 * Append a table element with all cats in element.
 * @param { HTMLElement } element 
 */
function catsTable(element, cats) {
  if (element.hasChildNodes()) {
    const child = element.firstChild
    element.removeChild(child)
  }

  const table = document.createElement('table')

  appendTableHeaders(table)
  appendCatsToTable(table, cats)

  element.appendChild(table)
}

function appendTableHeaders(table) {
  const columns = ['id', 'Nombre', 'Edad', 'Raza', 'Acciones']
  const tr = document.createElement('tr')

  for (const column of columns) {
    const th = document.createElement('th')
    th.textContent = column

    tr.appendChild(th)
  }

  table.appendChild(tr)
}

function appendCatsToTable(table, cats) {
  const fragment = document.createDocumentFragment()

  for (const cat of cats) {
    const tr = document.createElement('tr')

    const id = document.createElement('td')
    id.textContent = cat.id
    tr.appendChild(id)

    const name = document.createElement('td')
    name.textContent = cat.name
    tr.appendChild(name)

    const age = document.createElement('td')
    age.textContent = cat.age
    tr.appendChild(age)

    const breed = document.createElement('td')
    breed.textContent = cat.breed
    tr.appendChild(breed)

    const actions = document.createElement('td')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Borrar'
    deleteBtn.addEventListener('click', async e => {
      await deleteCatById(cat.id)
      const target = document.getElementById('target')
      const cats = await getAllCats()
      catsTable(target, cats)
    })
    actions.appendChild(deleteBtn)
    tr.appendChild(actions)

    fragment.appendChild(tr)
  }

  table.appendChild(fragment)
}

export {
  catsTable
}
