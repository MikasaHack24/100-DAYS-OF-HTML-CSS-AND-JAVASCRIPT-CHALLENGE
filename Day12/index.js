const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");
const info = document.getElementById("info");

getWeather.addEventListener("click", () => {

    fetch("https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true")
    .then(response=>response.json())
    .then(data=> {
        const temperature = data.current_weather.temperature;
        const windspeed = data.current_weather.windspeed;
        const icon = document.getElementById("icon");
        
        if (temperature>= 30){
            icon.src = "sunny.png"
            info.textContent = "Sunny!";
        }

        else if(temperature >= 20 && temperature < 30){
            icon.src = "cloudy.png"
            info.textContent = "Cloudy!";
        }
        
        else {
              icon.src = "rainy.png";
              info.textContent = "Rainy!";
  }
        weatherResult.innerHTML = `Temperature: ${temperature}°C<br>Windspeed: ${windspeed} km/h`;

       
    })

    .catch(error=> {
        weatherResult.innerHTML = "Error fetching weather data.";
        console.error("Error:", error);
    });






})