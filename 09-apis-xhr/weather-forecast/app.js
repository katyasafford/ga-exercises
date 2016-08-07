var openWeatherMapKey = "643b392594192a0a9204a0ee8dd0f936";
var giphyKey = "dc6zaTOxFJmzC";

function convertToFahrenheit(tempInKelvin) {
  var tempInFahrenghet = (tempInKelvin * 9/5) - 459.67;
  return tempInFahrenghet.toFixed(2);
}

$(function() {
  var $cityInput = $('#city');
  var $countryCodeInput = $('#countryCode');
  var $submitButton = $('#submit');
  var $giphyContainer = $('#giphyContainer');
  var $temp = $('#temperature');

  $submitButton.on('click', function() {
    if (!$cityInput.val()) {
      alert("Enter city first!");
      return;
    }

    var city = $cityInput.val();
    var country = $countryCodeInput.val();

    var geoCode = city + ',' + country;

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + geoCode + '&appid=' + openWeatherMapKey,

        success: function(data) {
          //console.log(data);
          jsonOutput = JSON.stringify(data);
          jsonObject = JSON.parse(jsonOutput);
          var temperature = jsonObject.main.temp;
          var convertedTemperature = convertToFahrenheit(temperature);
          //console.log(convertedTemperature);
          $temp.empty();
          $temp.text(convertedTemperature + " F");

          var weatherDescription = jsonObject.weather[0].description;
          console.log("weather description: " + weatherDescription);

          getRandomGiphyUrl(weatherDescription);
        },

        error: function(jqXHR) {
          if (jqXHR.status == 401) {
            msg = 'Unathorized';
            console.log(msg);
          }
          else if (jqXHR.status == 404) {
            msg = "Page Not Found";
            console.log(msg);
          }
        }
    });
  });

function getRandomGiphyUrl(description) {
  $giphyContainer.empty();
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/random?api_key=' + giphyKey + '&tag=' + description,
    success: function(data) {
      //console.log(data);
      jsonOutput = JSON.stringify(data);
      jsonObject = JSON.parse(jsonOutput);
      var giphyUrl = jsonObject.data.image_url;

      $("#giphyContainer").attr("src", giphyUrl);
    },
  });
}

});
