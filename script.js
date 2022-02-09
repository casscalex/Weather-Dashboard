// request access to the api
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=857c5b74ba837e515c35fc82b13067c6"

fetch(requestUrl)
    .then(function(response) {
            return response.json();
    })
    .then(function(data) {
            console.log(data);
    });

// // return values for weather forecast
var temp = document.querySelector("main.temp");
var wind = document.querySelector("wind.speed");
var humid = document.querySelector("main.humidity");
// var uvi = document.querySelector("")
console.log(temp);

// search bar functionality

// // curentWeather Function
function currentWeather() {

    document.getElementById("Temp").innerHTML += 
        "<h3>Temp:</h3>" + temp;

    document.getElementById("Wind").innerHTML += 
        "<h3>Wind:</h3>" + wind;

    document.getElementById("Humidity").innerHTML += 
        "<h3>Humidity:</h3>" + humid;

    document.getElementById("UVI").innerHTML += 
        "<h3>UV Index:</h3>" + uvi;
 
}

currentWeather();

