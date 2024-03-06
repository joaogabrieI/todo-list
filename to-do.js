const addTarefa = document.querySelector('.btn-add-tarefa')
const formAddTarefa = document. querySelector('.form-add-tarefa')

addTarefa.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden')
})