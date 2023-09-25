const apiKey = 'a9cf9a11f74e925f7f32b802da107d0f';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const citySearch = document.querySelector('.search input');
const cityButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(cityname){
    const response = await fetch(apiURL + cityname + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }

    document.querySelector('.weather').style.display = 'block';
}

cityButton.addEventListener('click', ()=>{
    checkWeather(citySearch.value);
});


