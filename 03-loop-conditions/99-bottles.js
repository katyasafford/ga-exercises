var total = 99;
for (var i=total; i>=0; i--) {
  if (i == 1) {
    console.log(i + ' bottle of beer on the wall, ' + i +' bottle of beer. ' + '\n' +'Take one down and pass it around, no more bottles of beer on the wall' + '\n');
  }
  else if (i == 0) {
    console.log('No more bottles of beer on the wall, no more bottles of beer.' + "\n" +'Go to the store and buy some more, ' + total +' bottles of beer on the wall.' + '\n');
  }
  else {
    console.log(i + ' bottles of beer on the wall, ' + i +' bottles of beer. ' + '\n' +'Take one down and pass it around, '+ (i-1) + ' bottles of beer on the wall. ' + '\n');
  }
}
