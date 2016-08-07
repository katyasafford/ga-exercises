//constructor function
function Car(odometer, mpg) {
//if statements makes odometer parameter optional; if you don't pass it when we define car1 - odometer will be ==0
  if (odometer) {
    this.odometer = odometer;
  }
  this.mpg = mpg;
  //by default when we create a car we have 20 gallons
  this.gallons = 20;
}

//this will be the default value
Car.prototype.odometer = 0;
Car.prototype.drive = function(miles) {
  var range = this.mpg * this.gallons;
  console.log("range: " + range);
  if (miles < range) {
    this.odometer += miles;
  }
  else {
    console.warn("You don't have enough gas");
  }
}

var newCar = new Car(0, 20);
newCar.drive(120);
console.log(newCar.odometer);
newCar.drive(400);
