var age = 40;
if (age == 40) {
  //console.log("You're 40");
}
else if (age >= 21) {
  //console.log("More than 21");
}
else {
  console.log("no booze");
}

// ternary operator
// condition ? true : false
var message = (age >=21 ) ?
  'Whats your order?':
  'No booze';
//console.log(message);

//type coercion
//console.log('4 < "6"', 4 < '6');
//console.log('ga < GA', 'ga' < 'GA');
//console.log('GA < ga', 'GA' < 'ga');
//capitalize letters are greater than small letters
//console.log('alex < brian', 'alex' < 'brian');

// === - identity operator, checks value AND type
// == - equality operator, coerce the value
//console.log("5" == 5) //true
//console.log("5" === 5); //false

var family = ['alex', 'brian'];
var family2 = ['alex', 'brian'];
//console.log('compare families', family === family2); //false because there's different array instances

var name = "";
if (name) {
  console.log("Your name is " + name);
}
else {
  //console.log("You don't have a name");
}

var person;
//console.log(person.name); should break
var person = {};
console.log(person.name);
if (person && person.name) {
  console.log("name: " + person.name)
}
else {
  console.log("A person has no name");
}
