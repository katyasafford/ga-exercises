var openWeatherMapKey = "643b392594192a0a9204a0ee8dd0f936";
var giphyKey = "dc6zaTOxFJmzC";

function convertToFahrenheit(tempInKelvin) {
  var tempInFahrenghet = (tempInKelvin * 9/5) - 459.67;
  return tempInFahrenghet;
}

$(function() {
  var $cityInput = $('#city');
  var $countryCodeInput = $('#countryCode');
  var $submitButton = $('#submit');
  var $giphyContainer = $('#giphyContainer');

  $submitButton.on('click', function() {
    var city = $cityInput.val();
    var country = $countryCodeInput.val();

    var geoCode = city + ',' + country;

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + geoCode + '&appid=' + openWeatherMapKey,

        success: function(data) {
          // if I skip line "jsonOutput = JSON.stringify(data);"
          // and just try to parse 'data' right away, I get an error.
          // WHy do I have to stringify first?
          jsonOutput = JSON.stringify(data);
          jsonObject = JSON.parse(jsonOutput);
          var temperature = jsonObject.main.temp;
          var convertedTemperature = convertToFahrenheit(temperature);
          console.log(convertedTemperature);

          // var weatherDescription = jsonObject.weather.description;
          // return weatherDescription;
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


    // $("#giphyContainer").attr("src", giphyUrl);
    // getRandomGiphy("american+psycho");

  });

function getRandomGiphyUrl(description) {
  $giphyContainer.empty();

  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/random?api_key=' + giphyKey + '&tag=' + description,
    success: function(data) {
      jsonOutput = JSON.stringify(data);
      jsonObject = JSON.parse(jsonOutput);
      var giphyUrl = jsonObject.data.image_url;
      console.log(giphyUrl);
    },
    error: function() {},
  });


}




});
