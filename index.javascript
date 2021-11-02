//let weather = {
//paris: {temp: 19.7,humidity: 80},
//tokyo: {temp: 17.3,humidity: 50},
//lisbon: {temp: 30.2,humidity: 20},
//"san francisco": {temp: 20.9,humidity: 100},
//moscow: {temp: -5,humidity: 20}};

//let city = prompt("Enter a city?");
//if (weather[city] !== undefined) {
// let temperature = weather[city].temp;
//let humidity = weather[city].humidity;
//let celsiusTemperature = Math.round(temperature);
//let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//alert(
// `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%` );
//} else {
//alert(`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);}

//DATE AND TIME
let now = new Date();

let h3 = document.querySelector("h3");

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

h3.innerHTML = `${day} ${month} ${date}, ${year}, ${hours}:${minutes}`;

//SEARCH ENGINE
//DISPLAY CITY NAME

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h2 = document.querySelector("h2");
  if (searchInput.value) {
    h2.innerHTML = `City: ${searchInput.value}`;
  } else {
    h2.innerHTML = null;
    alert("Please enter city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
