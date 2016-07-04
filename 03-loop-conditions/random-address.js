var houseNumbers = [5, 3600, 24, 1224, 320, 70, 58];
var streetNames = ["Manor Rd", "Mueller Blvd", "Single Trc", "Big Rd", "Avenue C"];
var cities = ["Austin", "Odessa", "Houston", "Dallas"];
var states = ["TX", "NY", "OK", "AZ"];
var zips = [78712, 78546, 79876, 74981];

function getRandomElement(array) {
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

var randomAddress = getRandomElement(houseNumbers) + " " +
                    getRandomElement(streetNames) + ", " +
                    getRandomElement(cities) + " " +
                    getRandomElement(states) + ", " + 
                    getRandomElement(zips);

console.log(randomAddress);
