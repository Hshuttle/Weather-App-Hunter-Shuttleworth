// API key for open weather"71abd236202a60a8eea87ad972a67236"
var apiKey = "71abd236202a60a8eea87ad972a67236";

// fetch call to API
function apiCall(city) {
  // API for geo locating--not sure if i picked the wrong one
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=4&appid=" +
    apiKey;
  fetch(apiUrl).then(function (locWeather) {
    return locWeather.json().then(function (locData) {
      console.log(locData);
      //   pulling lat long and name into an array
      var long = locData[0].lon;
      var lat = locData[0].lat;
      var cityName = locData[0].name;
      var state = locData[0].state;
      var coordinates = [cityName, state, lat, long];
      console.log(coordinates);
    });
  });
  weatherFetch();
}
// Fetch call for weather using what I pulled in the coordinates variable
function weatherFetch(lat, long) {
  var weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=" +
    apiKey;

  fetch(weatherURL).then(function (locWeather2) {
    return locWeather2.json().then(function (locData2) {
      console.log(locData2);
    });
  });
}

// adding event listener to search button
$("#searchbtn").on("click", function (event) {
  var city = $("#city").val();
  apiCall(city);
  //   weatherFetch();
  console.log(city);
  event.preventDefault();
});
