// API key for open weather"71abd236202a60a8eea87ad972a67236"
var apiKey = "71abd236202a60a8eea87ad972a67236";
// API for geo locating--not sure if i picked the wrong one
// var apiUrl =
//   "http://api.openweathermap.org/geo/1.0/direct?q=austin&limit=4&appid=" +
//   apiKey;
// var city = $("#city").val();
// fetch call to API
function apiCall(city) {
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=4&appid=" +
    apiKey;
  fetch(apiUrl).then(function (locWeather) {
    return locWeather.json().then(function (locData) {
      console.log(locData);
    });
  });
}

// adding event listener to search button
$("#searchbtn").on("click", function (event) {
  var city = $("#city").val();
  apiCall(city);
  console.log(city);
  event.preventDefault();
});
