const apiKey = 'a9cf9a11f74e925f7f32b802da107d0f';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

let citySearch = document.querySelector('.search input');
let cityButton = document.querySelector('.search button');

async function checkWeather(cityname){
    const response = await fetch(apiURL + cityname + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
}

checkWeather();
