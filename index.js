let todoInput = document.querySelector(".input-btn");

let addTodoButton = document.querySelector(".button");

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
    console.log(todoList);
})