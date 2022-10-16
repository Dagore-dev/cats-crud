/**
 * Inject cats breed available in given select.
 * @param {HTMLSelectElement} select 
 * @param {string[]} breeds 
 */
function catsBreedsSelect(select, breeds) {
  const fragment = document.createDocumentFragment()

  for (const breed of breeds) {
    const option = document.createElement('option')

    option.textContent = breed
    option.value = breed

    fragment.appendChild(option)
  }

  select.appendChild(fragment)
}

export {
  catsBreedsSelect
}
