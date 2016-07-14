// function Monkey(name, species, foodEaten) {
//   this.name = name;
//   this.species = species;
//   this.foodEaten = [foodEaten];
// }
//
// Monkey.prototype.eatSomething = function(food) {
//   this.foodEaten.push(food);
// }
//
// Monkey.prototype.introduce = function() {
//   console.log("Hi! I'm " + this.name + ". I'm a " + this.species + ". I've eaten " + this.foodEaten)
// }
//
// var chimp = new Monkey("Bin", "Chimp", "banana");
// chimp.eatSomething("kiwi");
// chimp.eatSomething("banana");
// chimp.introduce();
//
// var probo = new Monkey("Bim", "Proboscis monkey", "apple");
// probo.eatSomething("banana");
// probo.introduce();
//
// var oran = new Monkey("Bon", "Orangutan")
// oran.eatSomething("orange");
// oran.eatSomething("vodka");
// oran.introduce();

//-----------

function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodEaten = [];
}

Monkey.prototype.eatSomething = function(food) {
  this.foodEaten.push(food);
}

Monkey.prototype.introduce = function() {

  if (this.foodEaten.length>=2) {
    var lastFood = this.foodEaten[this.foodEaten.length-1];
    this.foodEaten.pop();
    console.log("Hi! I'm " + this.name + ". I'm a " + this.species + ". I've eaten " + this.foodEaten + " and " + lastFood);
  }
  else {
    console.log("Hi! I'm " + this.name + ". I'm a " + this.species + ". I've eaten " + this.foodEaten)
  }
}


var chimp = new Monkey("Bin", "Chimp");
chimp.eatSomething("kiwi");
chimp.eatSomething("banana");
chimp.introduce();

var probo = new Monkey("Bim", "Proboscis monkey");
probo.eatSomething("banana");
probo.introduce();

var oran = new Monkey("Bon", "Orangutan")
oran.eatSomething("orange");
oran.eatSomething("vodka");
oran.eatSomething("apple");
oran.introduce();
var oranJson = JSON.stringify(oran);
console.log(oranJson);
