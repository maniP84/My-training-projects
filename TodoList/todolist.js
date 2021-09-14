const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletCompleteTodo);
filterOption.addEventListener("click", filterTodo)

document.addEventListener("DOMContentLoaded", getTodos);

function addTodo(event) {
    event.preventDefault()
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    saveLocalTodo(todoInput.value);
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = ""

    const copmpetedButton = document.createElement("button")
    copmpetedButton.innerHTML = "<i class='fas fa-check'></i>"
    copmpetedButton.classList.add("complete-btn");
    todoDiv.appendChild(copmpetedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv)
    filterTodo()

}

function deletCompleteTodo(event) {
    // console.log(event.target.parentElement)
    const item = event.target;
    console.log(item.classList[0])
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        removeLocalTodo(todo)
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
    filterTodo()
}

function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function filterTodo(event) {
    console.log(event)
    const todos = todoList.childNodes;
    console.log(todos)
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none"
                } else {
                    todo.style.display = "flex"

                }
        }
    })
}

function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));

    };
    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))

}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value = ""

        const copmpetedButton = document.createElement("button")
        copmpetedButton.innerHTML = "<i class='fas fa-check'></i>"
        copmpetedButton.classList.add("complete-btn");
        todoDiv.appendChild(copmpetedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='fas fa-trash'></i>"
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv)
    })
}