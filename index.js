let todoInput = document.querySelector(".input-btn");

let addTodoButton = document.querySelector(".button");

let showTodos = document.querySelector(".todos-container");

let todo;
let todoList = [];

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

addTodoButton.addEventListener("click" , () => {
    todo = todoInput.value;
    if(todo.length > 0 ){
        todoList.push({id : uuid() , todo : todo , isCompleted : false})
    }
    renderTodoList(todoList);
})

showTodos.addEventListener("click" , (e) =>{
    let key = e.target.dataset.key;
    // console.log(key);
    // console.log(e.target);
    todoList = todoList.map(todo => todo.id === key ? {...todo , isCompleted : !todo.isCompleted} : todo)
    renderTodoList(todoList);
    console.log(todoList);
})

function renderTodoList(todoList){
    showTodos.innerHTML = todoList.map(({id , todo ,isCompleted}) => `<div><input id ="item-${id}" type="checkbox" ${isCompleted ? "checked" : ""} data-key = ${id}><label for ="item-${id}" class ="todo todo-text t-pointer" ${isCompleted ? "checked-todo" : "" } data-key = ${id}>${todo}</label><button class="button">delete</button></div>`)
}

