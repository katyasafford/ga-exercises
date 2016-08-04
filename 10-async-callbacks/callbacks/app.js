/**
 * Reinventing the Wheel: jQuery's $.get method
 *
 * Last class we saw how jquery’s $.get method facilitates making HTTP GET requests.
 * For this exercise you will implement your own $.get helper function.
 *
 * Directions
 *
 * 1. Your $.get method should take 3 parameters
 *     1. url string: A url to send the HTTP request to
 *     2. onSuccess: A callback function which should be called once data
 *        is returned from the server and a 200 was returned. The success body
 *        should be sent back to the callback as the only argument.
 *     3. onError: A callback function which should be called once a response
 *        was received and the status was not 200. The status and success body
 *        should be sent back to the callback as the only 2 arguments.
 * 2. You should use an XHR to make the underlying HTTP request.
 * 3. Bonus: Reinvent the $.ajax method.
 *
 * DO NOT USE JQUERY.
 */

var $ = {
  get: function(url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if(xhr.status === 200) {
          setInterval(function() {

            //put this into separate function, so if you need other url, you can just add its own fucntion
            var response = JSON.parse(xhr.responseText);

            var date = response.time.updated;
            var money = response.bpi.USD.rate;
            console.log(money, date);
            //onSuccess();
        }, 6000);
        }
        else {
          onError(xhr.responseText)
        }
      }
    }

    xhr.open('GET', url);
    xhr.send();

  }
};



// ----------

var url = 'https://www.reddit.com/r/javascript.json';
var bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

$.get(bitcoinUrl, onSuccess, onError);

//$.get(url, onSuccess, onError);

function onSuccess(data) {
  console.log('success', data);
}

function onError(status, body) {
  console.log('error', status, body);
}
