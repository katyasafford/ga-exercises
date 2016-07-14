var myTruck = new Vehicle(2010);
//console.log(myTruck);

//constructor function
function Vehicle(year) {
  this.year = year;
}

function Pokemon(type, level) {
  this.type = type;
  this.level = level;
}

Pokemon.prototype.levelUp = function() {
  this.level++;
}

var pikachu = new Pokemon('electric', 10);
console.log("pikachu", pikachu)
pikachu.levelUp();
console.log("pikachu", pikachu)
