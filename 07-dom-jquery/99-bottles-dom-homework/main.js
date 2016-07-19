$(function() {
  var $showLyricsBtn = $("#start");
  var $clearBtn = $("#clear");
  var $lyricsList = $("#song");
  var $customTotal = $("#startAmount");
  var $stepThroughBtn = $("#stepThrough");
  var totalBeer;

  $showLyricsBtn.on('click', function() {
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
  })

  $stepThroughBtn.on('click', function() {
    totalBeer = $customTotal.val();

    // if (totalBeer > 0) {
    //   $customTotal.val(totalBeer -1);
    // }
    //
    if (totalBeer < 0) {
      alert('No more beer! Get some more!');
      return;
    }
    else if (totalBeer == 0) {
      line = 'No more bottles of beer on the wall, no more bottles of beer.' + "\n" +'Go to the store and buy some more, ' + totalBeer +' bottles of beer on the wall.' + '\n';
      $lyricsList.append('<li>' + line + '</li>');
    }
    else if (totalBeer == 1) {
      line = totalBeer + ' bottle of beer on the wall, ' + totalBeer +' bottle of beer. ' + '\n' +'Take one down and pass it around, no more bottles of beer on the wall' + '\n';
      $lyricsList.append('<li>' + line + '</li>');
    }
    else  {
      line = totalBeer + ' bottles of beer on the wall, ' + totalBeer +' bottles of beer. ' + '\n' +'Take one down and pass it around, '+ (totalBeer-1) + ' bottles of beer on the wall. ' + '\n'
      $lyricsList.append('<li>' + line + '</li>');
    }
    $customTotal.val(totalBeer -1);

  });

});
