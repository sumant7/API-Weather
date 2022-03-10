const api ={
    key: '8c39fafb36d359153c2eab94f6504ed3',
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search")
search.addEventListener('keypress',setQuery)

function setQuery(evt){
    if(evt.keyCode ==13){   //keyCode 13 is Enter Key
        getResults
    }
}