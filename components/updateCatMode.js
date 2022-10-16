async function updateCatMode({ id, name, age, breed }) {
  const addCatForm = document.getElementById('add-cat')
  const addCatInputs = {
    id: document.getElementById('id'),
    name: document.getElementById('name'),
    age: document.getElementById('age'),
    breedsSelect: document.getElementById('breed')
  }

  window.location.hash = 'add-cat'

  addCatInputs.id.value = id
  addCatInputs.name.value = name
  addCatInputs.age.value = age
  addCatInputs.breedsSelect.value = breed

  const cancelUpdateButton = createCancelUpdateButton(addCatForm)
  addCatForm.appendChild(cancelUpdateButton)
}

function createCancelUpdateButton(form) {
  const btn = document.createElement('input')
  btn.type = 'reset'
  btn.value = 'Cancelar actualización'
  btn.id = 'cancel'

  btn.addEventListener('click', e => {
    const idInput = document.getElementById('id')
    idInput.value = -1
    form.reset()
    btn.remove()
  })

  return btn
}

export {
  updateCatMode
}
