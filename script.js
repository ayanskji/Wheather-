// Api and url 
const apiKey = "5f95d14364f214e8e0b6b08d20e5e680";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// selectors
let searchbox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let weathericon = document.querySelector(".weathicon");
// async Start
async function checkweather(city) {
 const response = await fetch(apiurl + city + `&appid=${apiKey}`);
 let data = await response.json();
 console.log(data);
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
 document.querySelector(".humanity").innerHTML = data.main.humidity + "%";
 document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
 // Images
 if (data.weather[0].main == "Clouds") {
  weathericon.src = "/images/clouds.png";
 }
 else if (data.weather[0].main == "Clear") {
  weathericon.src = "/images/clear.png";
 }
 else if (data.weather[0].main == "rain") {
  weathericon.src = "/images/rain.png";
 }

 else if (data.weather[0].main == "drizzle") {
  weathericon.src = "/images/drizzle.png";
 }
 else if (data.weather[0].main == "Mist") {
  weathericon.src = "/images/mist.png";
 }
 else if (data.weather[0].main == "Snow") {
  weathericon.src = "/images/snow.png";
 }
 document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
 checkweather(searchbox.value);
})
