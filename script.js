const api ={
    key: '8c39fafb36d359153c2eab94f6504ed3',
    base: "https://api.openweathermap.org/data/2.5/"
}
//sign in to openweathermap to get api key

const search = document.querySelector(".search")
search.addEventListener('keypress',setQuery)

function setQuery(evt){
    if(evt.keyCode ==13){   //keyCode 13 is Enter Key
        getResults(search.value)
    }
}

//read from api doc how to work this
function getResults(query){
    fetch(`${api.base}weather?q=${query}&umits=metric&APPID=${api.key}`)
    .then(weather=> weather.json())
    .then(displayResults)
}

function displayResults(weather){
    console.log(weather)
}