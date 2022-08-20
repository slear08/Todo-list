const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todos = document.querySelector('.todos');

todoButton.addEventListener('click', addTodoList);
todos.addEventListener('click', completeAndDeleteTodos);
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
    todoInput.value = "";
}

function completeAndDeleteTodos(e){
    const compAndDel = e.target;

    if(compAndDel.classList.contains("trash-btn")){
        const toDelete = compAndDel.parentElement;
        toDelete.classList.add("remove-todo");
        
        toDelete.addEventListener("transitionend", (e)=>{
            toDelete.remove();
        })
    }
    if(compAndDel.classList.contains("complete-btn")){
        const toComplete = compAndDel.parentElement;
        toComplete.classList.toggle("completed-todo");
    }

}