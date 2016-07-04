
var dudes = ["one", "two"];
var x = dudes.length;

// while(x) {
//   console.log(dudes[x-1]);
//   x--;
// }

//
// for (var i = 0; i < dudes.length; i++) {
//   console.log(dudes[i]);
// }

var family = ['mom', 'dad'];
family.forEach(function(element, idx, array) {
  console.log(element, idx, array);
});
