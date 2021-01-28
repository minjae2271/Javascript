// const todoForm = document.querySelector(".js-todoForm");
// const inputTodo = todoForm.querySelector("input");
// const todos = document.querySelector(".js-todos")

// const TODO_LS = "todo"
// var ID = 1

// let todoList = []


// function deleteTodo(event){
//     const btn = event.target
//     // console.dir(btn)
//     const li = btn.parentNode
//     todos.removeChild(li)
    
//     const deletedTodoList = todoList.filter(function(ele){
//         //console.log(typeof(ele.id), typeof(li.id));
//         return ele.id !== parseInt(li.id);
//     });
//     console.log(todoList, deletedTodoList)

//     // if(deletedTodoList,length === 0){
//     //     localStorage.removeItem(TODO_LS);
//     //     //console.log("deleted from LS")
//     // } else {
//     //     todoList = deletedTodoList;
//     //     saveTodo()
//     // }
//     todoList = deletedTodoList;
//     console.log(todoList)
//     saveTodo()
// }

// function saveTodo(){
//     localStorage.setItem(TODO_LS, JSON.stringify(todoList));
// }

// function paintTodo(text){
//     // console.log(text);
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     const span = document.createElement("span");
//     delBtn.innerHTML = 'X'
//     delBtn.addEventListener("click", deleteTodo);
//     span.innerText = text;

//     li.appendChild(span);
//     li.appendChild(delBtn);
//     todos.appendChild(li);

//     todoID = ID += 1

//     li.id = todoID;

//     const todoObj = {
//         text,
//         id: todoID
//     };

//     todoList.push(todoObj);
//     saveTodo(todoObj);
// }

// function handleSubmit(event){
//     event.preventDefault();
//     const currentTodo = inputTodo.value;
//     paintTodo(currentTodo);
//     inputTodo.value = ""
// }

// function loadTodo(){
//     const todo = localStorage.getItem(TODO_LS);
    
//     if(todo !== null ){
//         const parsedTodo = JSON.parse(todo);
//         paintTodo(parsedTodo.text);
//     }
// }


// function init(){
//     loadTodo();
//     todoForm.addEventListener("submit",handleSubmit)
// };

// init();

const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoOl = document.querySelector(".js-todos");

let todoList =[];

function delTodo(event){
    //console.log(event.target);
    //console.dir(event);
    idx = event.target.parentElement.id;

    //localStorage remove
    localStorage.removeItem(idx);
    //list splice
    todoList.splice(idx,1);
    //li remove
    var elem = document.getElementById(idx);
    elem.remove();
}

function addTodoLi(obj){
    const li = document.createElement('li');

    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';
    delBtn.addEventListener("click",delTodo);

    const span = document.createElement('span');
    span.innerText = obj.text;
    
    li.id = obj.id;
    li.append(span);
    li.append(delBtn);
    todoOl.appendChild(li);
}

function addTodoList(obj){
    todoList.push(obj);
}

function addTodoLS(event){
    event.preventDefault();

    const text = todoInput.value;
    // const id = now + text;
    const id = todoList.length

    const obj = {
        id,
        text
    };

    //console.log(obj)
    localStorage.setItem(id, JSON.stringify(obj));
    todoInput.value = "";
    addTodoList(obj);
    addTodoLi(obj);
}

function loadTodos(){
    if(localStorage.length >0){
        for(let i=0; i<localStorage.length; i++){
            // console.log(localStorage.key(i))
            todo = JSON.parse(localStorage.getItem(localStorage.key(i)));
            addTodoList(todo);
        }

        todoList.sort(function(a, b) {
            return a.id - b.id;
          });

        for(let i=0; i<todoList.length; i++){
            addTodoLi(todoList[i]);
        }
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", addTodoLS);
};

init();