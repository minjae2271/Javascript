const clock = document.querySelector('#clock');

// function getTime(){
//     console.log('bye');
// }
// setTimeout(sayBye, 3000);

function getTime(){
    const date = new Date();
    //padStart , ?
    const hour = String(date.getHours()).padStart("2","0");
    const minute = String(date.getMinutes()).padStart("2","0");
    const second = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()
    clock.innerHTML = `${hour} : ${minute} : ${second}`;
}

getTime()
setInterval(getTime, 1000);