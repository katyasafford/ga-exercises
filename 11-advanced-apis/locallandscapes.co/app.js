$(document).ready(function () {
   var $loginBtn = $('#login');
   var $signInView = $('.sign-in-view');
   var $imageResultsView = $('.image-results-view');
   var $images = $('#images');
   var $currentUser = $('.current-user');
   var $logoutBtn = $('#logout');

   // initialize the SDK with our API key
  _500px.init({
    sdk_key: '012cab9c6b91ab199657a410100fb7fbfa0281ec'
  });

  _500px.getAuthorizationStatus(function (status) {
    if (status == 'authorized') {
      load();
    }
  });

  $loginBtn.on('click', function() {
    _500px.login(function (status) {
      if(status == 'authorized') {
        load();
        showUserInfo();
      }
      else {
        console.log("You are not authorized");
      }
    });
  });

  _500px.on('authorization_obtained', function () {
    $logoutBtn.show();
  });

  $logoutBtn.on('click', function() {
    _500px.logout();
    $currentUser.empty();
    $currentUser.hide();
    $signInView.show();
    $imageResultsView.hide();
  })

  function showUserInfo() {

    $currentUser.show();

    _500px.api('/users', function(response) {
      console.log(response);

      var userEmail = response.data.user.email;
      var regesrationDate = response.data.user.registration_date;
      var locale = response.data.user.locale;

      $currentUser.append("<li>User Email: " + userEmail + "</li>");
      $currentUser.append("<li>Regestration Date: " + regesrationDate + "</li>");
      $currentUser.append("<li>User Language: " + locale + "</li>");
    })
  }

  function load() {

    $signInView.hide();
    $imageResultsView.show();

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var radius = 50;
        var geo = position.coords.latitude +
                  ',' +
                  position.coords.longitude +
                  ',' +
                  radius +
                  'mi';
        console.log(geo);

        _500px.api('/photos/search', {geo: geo, rpp: 40, image_size: 3}, function(response) {
          console.log(response);

          var photos = response.data.photos;
          for (var i=0; i<photos.length; i++) {
            var url = photos[i].image_url;
            $('.images').append("<img class='image thumbnail' src=" + url +"/>");
          }
        });

      });
    }
    else {
      console.warn('browser doesnt support geolocation');
    }
  }
 });
