//variables
let weatherForecast = document.getElementById("weather-forecast")
let citySearch = document.getElementById("city-search")
let forecastResult = document.getElementById("forecast-result")
let cityInput = document.getElementById("city-input")
//let latitude =
//let longitude = 
//https://api.weather.gov/points/{latitude},{longitude}
//https://api.weather.gov/points/37.5407,-77.436 (richmond)

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.weather.gov/points/37.5407,-77.436 ", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //when we find a way to add cities by latitude and longitutde

  /*
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://api.weather.gov/points/" + latitude + "," + longitude ")
    .then (respons => response.text())
    .then (result => console.log(result))
    .catch(error => console.log('error', error));
  }