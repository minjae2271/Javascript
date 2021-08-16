const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

let todos = [];

const TODOS_KEY = "todos"

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function paintTodo(newTodoObj){
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);

    todoList.appendChild(li);
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function deleteTodo(e){
    const deleteLi = e.target.parentElement
    deleteLi.remove();
    todos = todos.filter(ele => ele.id !== parseInt(deleteLi.id));
    saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}