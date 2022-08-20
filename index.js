const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todos = document.querySelector('.todos');

todoButton.addEventListener('click', addTodoList);

function addTodoList(e){
    e.preventDefault()

    const createElement = document.createElement('div');
    createElement.classList.add('todo-item'); 

    const createTodo = document.createElement('li');
    createTodo.innerText = todoInput.value;
    createTodo.classList.add('todo');

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");  

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add("trash-btn");  

    createElement.appendChild(createTodo);
    createElement.appendChild(completedButton);
    createElement.appendChild(deleteButton);
    

    todos.appendChild(createElement);
}