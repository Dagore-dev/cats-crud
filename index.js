import { catsTable } from './components/catsTable.js'
import { getAllCats } from './services/getAllCats.js'
import { getCatsContains } from './services/getCatsContains.js'

const searchForm = document.getElementById('search')
const searchInput = document.getElementById('search-input')
const target = document.getElementById('target')

searchForm.addEventListener('submit', async e => {
  e.preventDefault()

  const query = searchInput.value
  const cats = await getCatsContains(query)

  catsTable(target, cats)
})

const cats = await getAllCats()

catsTable(target, cats)
