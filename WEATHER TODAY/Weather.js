let country = document.querySelector(".country");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let temperature_icon = document.querySelector(".temperature-icon");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let timeZone = document.querySelector(".timezone");
let windspeed = document.querySelector(".windspeed");
let searchBtn = document.querySelector(".search");
let inputBar = document.querySelector(".input-bar");
let icon = document.querySelector(".temperature-icon");

searchBtn.addEventListener("click", function () {
  city = inputBar.value;
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=69b7ace1292f4680e6ec6440f4372d2e";
  fetchdata(url);
});

let key = "69b7ace1292f4680e6ec6440f4372d2e";

function getTime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  var dateTime = hour + ":" + minute + ":" + second;
  return dateTime;
}

function getDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var now = new Date();
  var year = now.getFullYear();
  var month = months[now.getMonth() + 1];
  var day = now.getDate();

  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  var dateTime = day + " " + month + " " + year;
  return dateTime;
}
// example usage: realtime clock
setInterval(function () {
  currentTime = getTime();
  currentDate = getDate();
  document.querySelector(".time").textContent = currentTime;
  document.querySelector(".date").textContent = currentDate;
}, 1000);

getLocation();
//getting current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    position.coords.latitude +
    "&lon=" +
    position.coords.longitude +
    "&units=metric&appid=69b7ace1292f4680e6ec6440f4372d2e";
  fetchdata(url);
}

function displayIcon(weatherData) {
  if (weatherData == "Clear") {
    icon.innerHTML = "<i class='bi bi-cloud-sun-fill'></i>";
  } else if (weatherData == "Rain") {
    icon.innerHTML = "<i class='bi bi-cloud-lightning-rain-fill'></i>";
  } else if (weatherData == "Snow") {
    icon.innerHTML = "<i class='bi bi-cloud-snow-fill'></i>";
  } else if (weatherData == "Clouds") {
    icon.innerHTML = "<i class='bi bi-clouds-fill'></i>";
  } else {
    icon.innerHTML = "<i class='bi bi-cloud-haze2-fill'></i>";
  }
}

//

// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=69b7ace1292f4680e6ec6440f4372d2e

async function fetchdata(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.cod);
  if (data.cod == 404) {
    document.querySelector(".container").classList.remove("main-body");
    document.querySelector(".lane-1").style.display = "none";
    document.querySelector(".lane-2").style.display = "none";
    document.querySelector(".container").classList.add("main-body-b");
  }
  weather.innerHTML = data.weather[0].description.toUpperCase();
  temperature.innerHTML = Math.round(data.main.temp) + "&#8451";
  humidity.innerHTML = data.main.humidity + "%";
  pressure.innerHTML = data.main.pressure + "hPa";
  timeZone.innerHTML = data.timezone / 3600 + " UTC";
  windspeed.innerHTML = data.wind.speed + "m/s";
  country.innerHTML = data.sys.country + "," + data.name;

  displayIcon(data.weather[0].main);
}

// function get() {
//   let xhr = new XMLHttpRequest();
//   xhr.open(
//     "GET",
//     "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=69b7ace1292f4680e6ec6440f4372d2e",
//     true
//   );

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       data = xhr.responseText;
//       const file = data.json();
//       console.log(file);
//     }
//   };
//   xhr.send();
// }
