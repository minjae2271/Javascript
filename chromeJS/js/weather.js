const API_KEY = 'c67f362f84cfa36d7914adf36a68a2bc'

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerHTML = data.name;
        weather.innerHTML = data.weather[0].main;
    })
}

function onGeoFail(){
    alert("We Can't Find You");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);

