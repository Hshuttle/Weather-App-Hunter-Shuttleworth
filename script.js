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
      var coordinates = { cityName, state, lat, long };
      console.log(coordinates);
      weatherFetch(coordinates);
    });
  });
}
// Fetch call for weather using what I pulled in the coordinates variable
function weatherFetch({ cityName, state, lat, long }) {
  var weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    long +
    "&units=imperial&appid=" +
    apiKey;

  fetch(weatherURL).then(function (locWeather2) {
    return locWeather2.json().then(function (locData2) {
      console.log(locData2);
      var card = $("<div>").addClass("card");
      var cardBody = $("<div>").addClass("card-body");
      var cardHeader = $("<div>").addClass("card-header");
      var cardTitle = $("<h2>")
        .addClass("card-title")
        .text(cityName + ", " + state);
      var tempEl = $("<h4>")
        .addClass("card-text")
        .text(
          "Temperature: " +
            Math.round(locData2.main.temp) +
            String.fromCharCode(176) +
            "F"
        );
      var iconEl = $("<img>").attr(
        "src",
        `http://openweathermap.org/img/wn/${locData2.weather[0].icon}@2x.png`
      );
      $("#resultsDisplay").append(
        card.append(
          cardBody.append(cardHeader.append(cardTitle.append(iconEl))),
          tempEl
        )
      );
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
