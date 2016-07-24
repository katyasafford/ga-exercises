var startupX = ["Uber",
                "AirBnb",
                "Google",
                "Facebook",
                "Dropbox",
                "Reddit",
                "Tindr",
                "Grindr"];

var startupY = ["alcoholics",
                "sumo-wrestlers",
                "ex-girlfriends",
                "pre-school teachers",
                "senators",
                "prisoners"];

function getRandomElement(array) {
  return array[Math.floor(Math.random()*array.length)]
}

$(function() {
    var $printNameHere = $("#xForY");
    var $createBtn = $("#create");
    var $favoriteBtn = $("#favorite");
    var $printFavoriteBtn = $("#print");
    var $favList = $("#favoriteList")
    var $addedLabel = $("#added");

    var favoriteStartups = [];

    $createBtn.on('click', function() {
      var random1 = getRandomElement(startupX);
      var random2 = getRandomElement(startupY);
      $printNameHere.empty();
      $printNameHere.append(random1 + " for " + random2);
    });

    $favoriteBtn.on('click', function() {
      var currentStartup = $printNameHere.text();
      favoriteStartups.push(currentStartup);

      if ($addedLabel.is(":visible")) {
        return;
      }
      $addedLabel.show();
      setTimeout(function() {
        $addedLabel.hide();
      }, 3000);
    });

    $printFavoriteBtn.on('click', function() {
      $favList.empty();
      for (i = 0; i < favoriteStartups.length; i++) {
        $favList.append('<li>' + favoriteStartups[i] + '</li>');
      }
});
});
