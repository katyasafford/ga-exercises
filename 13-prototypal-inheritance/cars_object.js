// function makeCar(year, make, model) {
//   return car ={
//     carYear: year,
//     carMake: make,
//     carModel: model
//   };
// }
//
// var car1 = makeCar(2011, "Honda", "Civic");
// var car2 = makeCar(2012, "Jeep", "Wrangler");
// var car3 = makeCar(2013, "Nissan", "Versa");

// console.log(car1);
// console.log(car2);
// console.log(car3);
//
//this is a preferable way, compared to way on line 1
//because it will inherit the prototype
//it's also better to create methods via prototype instead of adding them
//inside the object (like printYear)
//because if you put function inside object, it takes more computational power
//i.e. if you created 100 objects, it'll have 100 methods inside each of these objects,
//while if you create it via protope - you'll create it just once, in one place
//Student.protope.introuce = function(){ ...} <---- like this!!
 // function Car(year, make, model) {
 //   this.year = year;
 //   this.make = make;
 //   this.model = model;
 //   this.printYear = function() {
 //     console.log("year: " + this.year);
 //   }
 // }
 //
 // var myCar = new Car(2010, 'Honda', 'Civic');
 // myCar.printYear();
 //
 // Exercise2
 function Car(year, make, model) {
   if(year) {
  this.year = year; // we need to wrap this.year=year inside if, otherwise var myCar = new Car(); will give underfined
}
  // this.make = make;
  // this.model = model;
}


//we want to create car with default year, make and model, so we created prototype
Car.prototype.year = 2000;
Car.prototype.make = 'Honda';
Car.prototype.model = 'Civic';

Car.prototype.printStats = function() {
  console.log(this.year, this.make, this.model);
}

var myCar = new Car();
myCar.printStats(); // will print 2000 'Honda' 'Civic': custon 2000year and default Honda Civic

var car2 = new Car(3000);
car2.printStats(); // will print 2000 'Honda' 'Civic': custon 2000year and default Honda Civic
