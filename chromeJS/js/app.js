const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector('#greeting');

const localUserName = localStorage.getItem('userName');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "userName";

if(!localUserName){
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(localUserName);
}

function paintGreeting(userName){
    greeting.classList.toggle(HIDDEN_CLASSNAME);
    greeting.innerHTML = userName;
}

function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(localUserName);
}


