import { catsBreedsSelect } from './components/catsBreedsSelect.js'
import { catsTable } from './components/catsTable.js'
import { getAllCats } from './services/getAllCats.js'
import { getAllCatsBreeds } from './services/getAllCatsBreeds.js'
import { getCatsContains } from './services/getCatsContains.js'
import { createNewCat } from './services/createNewCat.js'
import { updateCat } from './services/updateCat.js'

const searchForm = document.getElementById('search')
const searchInput = document.getElementById('search-input')
const addCatForm = document.getElementById('add-cat')
const addCatInputs = {
  idInput: document.getElementById('id'),
  nameInput: document.getElementById('name'),
  ageInput: document.getElementById('age'),
  breedsSelect: document.getElementById('breed')
}
const target = document.getElementById('target')

searchForm.addEventListener('submit', async e => {
  e.preventDefault()

  const query = searchInput.value
  const cats = await getCatsContains(query)

  catsTable(target, cats)
})

addCatForm.addEventListener('submit', async e => {
  e.preventDefault()

  const id = addCatInputs.idInput.value
  const name = addCatInputs.nameInput.value
  const age = Number(addCatInputs.ageInput.value)
  const breed = addCatInputs.breedsSelect.value

  if (name.length !== 0 && !Number.isNaN(age) && breed != null) {
    let cats

    if (id !== "-1") {
      cats = await updateCat(id, name, age, breed)
      addCatInputs.idInput.value = '-1'
      addCatForm.removeChild(addCatForm.lastChild)
    } else {
      cats = await createNewCat(name, age, breed)
    }

    addCatForm.reset()

    catsTable(target, cats)
  } else {
    window.alert('Algo ha ido mal. Revise los campos del formulario')
  }
})

const cats = await getAllCats()
const breeds = await getAllCatsBreeds()

catsTable(target, cats)
catsBreedsSelect(addCatInputs.breedsSelect, breeds)
