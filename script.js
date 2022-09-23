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
      var long = locData[0].lon;
      var lat = locData[0].lat;
      var cityName = locData[0].name;
      var coordinates = [cityName, lat, long];
      console.log(coordinates);
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
