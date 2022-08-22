document.addEventListener("DOMContentLoaded", () => {
let form = document.getElementById('create-task-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  handleToDo(e.target.new.value)
  form.reset()

})
});

function handleToDo(toDo)
{
  console.log(toDo)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${toDo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}