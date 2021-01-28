body = document.querySelector('body');


function createRandNum(){
    const randNum = Math.floor(Math.random()*3)
    return randNum
}

function init(){
    const randNum = createRandNum();
    //getBg();
}

init();