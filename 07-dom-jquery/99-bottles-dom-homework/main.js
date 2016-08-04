$(function() {
  var $showLyricsBtn = $("#start");
  var $clearBtn = $("#clear");
  var $lyricsList = $("#song");
  var $customTotal = $("#startAmount");
  var $stepThroughBtn = $("#stepThrough");
  var $restockBtn = $("#reset");

  $showLyricsBtn.on('click', function() {
    $lyricsList.empty();
    var total = 99;
    for (var i=total; i>=0; i--) {
      if (i == 1) {
        line = i + ' bottle of beer on the wall, ' + i +' bottle of beer. ' + '\n' +'Take one down and pass it around, no more bottles of beer on the wall' + '\n';
        $lyricsList.append('<li>' + line + '</li>');
      }
      else if (i == 0) {
        line = 'No more bottles of beer on the wall, no more bottles of beer.' + "\n" +'Go to the store and buy some more, ' + total +' bottles of beer on the wall.' + '\n';
        $lyricsList.append('<li>' + line + '</li>');
      }
      else {
        line = i + ' bottles of beer on the wall, ' + i +' bottles of beer. ' + '\n' +'Take one down and pass it around, '+ (i-1) + ' bottles of beer on the wall. ' + '\n'
        $lyricsList.append('<li>' + line + '</li>');
      }
    }
  });

  $clearBtn.on('click', function() {
    $lyricsList.empty();
    $customTotal.val('');
  })

  var inputValues = [];
  $stepThroughBtn.on('click', function() {
    inputValues.push($customTotal.val());
    var totalBeer = $customTotal.val();

    if (!$customTotal.val()) {
      alert('Enter amount of beer to start with first!');
      return;
    }

    if (totalBeer == 1) {
      line = totalBeer + ' bottle of beer on the wall, ' + totalBeer +' bottle of beer. ' + '\n' +'Take one down and pass it around, no more bottles of beer on the wall' + '\n';
      $lyricsList.append('<li>' + line + '<a href="#">completed</a></li>');
    }
    else if (totalBeer > 1) {
      line = totalBeer + ' bottles of beer on the wall, ' + totalBeer +' bottles of beer. ' + '\n' +'Take one down and pass it around, '+ (totalBeer-1) + ' bottles of beer on the wall. ' + '\n'
      $lyricsList.append('<li>' + line + '<a href="#">completed</a></li>');
    }
    else {
      line = 'No more bottles of beer on the wall, no more bottles of beer.' + "\n" +'Go to the store and buy some more, ' + inputValues[0] +' bottles of beer on the wall.' + '\n';
      $lyricsList.append('<li>' + line + '<a href="#">completed</a></li>');
      inputValues.length = 0;
    }

    totalBeer--;
    $customTotal.val(totalBeer);

    if ($customTotal.val() < 0) {
      $customTotal.val('');
    }
  });

  $restockBtn.on('click', function() {
    $("#startAmount").val('');
    $("#startAmount").val(99);
  })

});
