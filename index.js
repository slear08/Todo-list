window.addEventListener('load', () => {

    getDataFromLocalStorage();
    todos = getDataFromLocalStorage();

    const todoForm = document.querySelector('[data-todo-form]');
    const userNameInput = document.querySelector('[data-user-name]');

    const username = localStorage.getItem('username') || '';
    

    userNameInput.value = username;
    

    userNameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value.toUpperCase());
	})

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if(e.target.elements.todoInput.value.trim().length === 0){
            e.target.elements.todoInput.style.border = 'solid 2px red';
        }else{
            e.target.elements.todoInput.style.border = 'solid 2px rgba(85, 84, 84, 0.811)';
            const todo = {
                id: new Date().getTime().toString(),
                name: e.target.elements.todoInput.value //GET THE VALUE ON THE INPUT FIELDS
            }
    
            todos.push(todo);
            setDataFromLocalStorage();
            displayTodo()
    
               // Reset the form
            e.target.reset();
        }
        

    });

    displayTodo();
});

function setDataFromLocalStorage(){
    return localStorage.setItem('todos', JSON.stringify(todos));
}
function getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('todos')) || [];
}
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }

}

function displayTodo(){

    const todoList = document.querySelector('[data-todo]');
    clearElement(todoList);
    
    todos.forEach(todo => {
        const createElement = document.createElement('div');
        createElement.classList.add('todo-item'); 
        
        const createTodo = document.createElement('div');
        createTodo.innerHTML = `<input type="text" value="${todo.name}" readonly>`;
        createTodo.classList.add('todo');
        
        const editButton = document.createElement("button");
        editButton.innerHTML = `<i class="fas fa-edit"></i>`;
        editButton.classList.add("edit-btn");
        
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteButton.classList.add("trash-btn");  
        
       
        createElement.appendChild(createTodo);
        createElement.appendChild(editButton);
        createElement.appendChild(deleteButton);
        todoList.appendChild(createElement);


        editButton.addEventListener("click", (e) => {
            const input = createTodo.querySelector('input');
            console.log(input);
            input.removeAttribute("readonly");
            input.focus();
            editButton.innerHTML = `<i class="fas fa-check"></i>`;
            
            input.addEventListener('blur', (e) => {
				
				todo.name = e.target.value;
                if(todo.name.trim().length === 0){
                    return input.focus();
                }else{
                    input.setAttribute('readonly', true);
                    setDataFromLocalStorage();
				    displayTodo()
                }
				
                
			})
           
        });
        deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(list => list != todo);
			setDataFromLocalStorage();
			displayTodo();
		})

        

        
        
    })

}




