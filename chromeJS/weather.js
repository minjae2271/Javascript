const COORD = "coord"

function handleGeoSuccess(position){
    console.log(position)
}

function handleGeoError(){
    console.log("Can't access geo")
}

function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    console.log('done')
}

function loadCoords(){
    const loadedCoord = localStorage.getItem(COORD);
    if(loadedCoord === null){
        askForCoord();
    } else {
        //getCoord();
    }
}

function init(){
    loadCoords();
}

init();