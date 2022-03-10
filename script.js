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
    let city = document.querySelector('.city')
    city.innerText =  `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    let date = document.querySelector('.date')
    date.innerText = dateBuilder(now)

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.floor(weather.main.temp) -273}<span>°c</span>`

    let weather_el= document.querySelector('.weather')
    weather_el.innerText = weather.weather[0].main

    let hilow = document.querySelector('.hi-low')
    let hi = Math.round(weather.main.temp_min) -273
    let low = Math.floor(weather.main.temp_max) -273
    hilow.innerText= `${hi}°c / ${low}°c`
}

function dateBuilder(d){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let day= days[d.getDay()]  //remember d.getDay() returns a number
    let date = d.getDate()  
    let month= months[d.getMonth()]  //remember d.getMonth() returns a number
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`
}