var magician = 'Gob Bluthe';
console.log(magician);

// console.log(typeof 6);
// console.log(typeof magician);

// type is undefined is var has nothing assigned to it
var magicianName;
console.log(magicianName);

//console.log("milk ' milk");
//console.log('"milk milk"');

var name = "gob";
var message = "hello " + name + "!";
//console.log(message);

var number = .1 + .2;
//console.log(number);

//console.log(5 / (3 - 2) * 4);
//console.log(15 % 7);

var radius = 2;
//console.log("area of circle with radius 2: " + Math.PI * Math.pow(radius, 2));

var x = 3;
x += 2;
//console.log(x);

x *= 2;
//console.log(x);

x /= 5;
//console.log(x);

x ++;
//console.log(x);

x --;
//console.log(x);

var randomNumber = Math.random();
// console.log(randomNumber);

// return random number either 1 or 2 - heads or tails
console.log(Math.floor(Math.random() * 2 + 1));

var array = new Array (1, 2, 3);
// console.log(array);

var array = new Array (3);
// console.log(array);

var numbers = [1, 2, 4];
// console.log(numbers);

var family = ['katya', 'kevin'];
console.log(family[2]);
console.log(family.length);
// family[5] = "noone";
// console.log(family.length);
// console.log(family);

family.push("mrs cat");
//console.log(family);

console.log("pop " + family.pop());
//console.log(family);

var myFamily = ["me", "Kevin"];
console.log(myFamily);
myFamily.unshift("mrs cat");
console.log(myFamily);
myFamily.reverse();
console.log(myFamily);

var productIds = [5, 12, 35];
console.log(productIds);
var str = productIds.join('~~');
console.log(str);
