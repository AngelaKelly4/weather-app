//DATE AND TIME
let now = new Date();

let h4 = document.querySelector("h4");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

h4.innerHTML = `${day} ${month} ${date}, ${year}, ${hours}:${minutes}`;

//SEARCH ENGINE
//DISPLAY CITY NAME
//function search(event) {
//event.preventDefault();
//let searchInput = document.querySelector("#search-text-input");
//let h2 = document.querySelector("h2");
//if (searchInput.value) {
//h2.innerHTML = `${searchInput.value}, 20`;} else {h2.innerHTML = null;alert("Please enter city");}}
//let form = document.querySelector("#search-form");
//form.addEventListener("submit", search);

//search city - show name and current temp
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = message;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let city = "Berlin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

//current position
function showWeather(response) {
  let h3 = document.querySelector("h3");
  let temperature = Math.round(response.data.main.temp);
  h3.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentLocation(retrievePosition);
}

let button = document.querySelector("button");