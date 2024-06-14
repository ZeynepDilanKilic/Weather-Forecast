const url = 'https://api.openweathermap.org/data/2.5/'
const key = '03762ec650a15f6e80b611e1a5d78888'

const setQuery = (e) =>
    {
        if(e.keyCode == '13')
        {
            getResults(searchBar.value)
        }
    }


const getResults = (cityName) =>
    {
        let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
        fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResults)
    }

const displayResults =(results) =>
    {
        let city = document.querySelector('.city')
        city.innerText = `${results.name}, ${results.sys.country}`

        let temp = document.querySelector('.temp')
        temp.innerText = `${Math.round(results.main.temp)}°C`
        
        let desc = document.querySelector('.desc')
        desc.innerText = results.weather[0].description

        let minmax= document.querySelector('.minmax')
        minmax.innerText = `${Math.round(results.main.temp_min)}°C / ${Math.round(results.main.temp_max)}°C`

        let input = document.querySelector('.header input')
        input.value = ''
    }

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keypress', setQuery)