/**
 * Append a table element with all cats in element.
 * @param { HTMLElement } element 
 */
function catsTable(element, cats) {
  const table = document.createElement('table')

  appendTableHeaders(table)
  appendCatsToTable(table, cats)

  element.appendChild(table)
}

function appendTableHeaders(table) {
  const columns = ['id', 'Nombre', 'Edad', 'Raza']
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

    fragment.appendChild(tr)
  }

  table.appendChild(fragment)
}

export {
  catsTable
}
