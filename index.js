import { catsTable } from './components/catsTable.js'
import { getAllCats } from './services/getAllCats.js'

const cats = await getAllCats()
window.cats = cats
const target = document.getElementById('target')

catsTable(target, cats)
