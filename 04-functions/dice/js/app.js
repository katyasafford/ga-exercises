/**
 * Creating a page where every time the user hits the "Roll Dice" button, the
 * screen randomly updates the two dice. Use the html and css code included in
 * the starter code folder to get started.
 *
 * 1) Write down pseudocode for the following program.
 *
 *    generate a random number between 1 - 6 and store to a variable, random1
 *    generate a random number between 1 - 6 and store to a variable, random2
 *    combine 'dice-' and random1 to form the random class for the first die, firstDie
 *    combine 'dice-' and random2 to form the random class for the second die, secondDie
 *    get the first die by ID and update the class to firstDie (hint: document.getElementById)
 *    get the first die by ID and update the class to secondDie (hint:document.getElementById)
 *
 * 2) Convert your pseudocode into javascript.
 *
 * 3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
 */

/**
 * Hooking up an onclick listener
 *
 * Get the element using document.getElementById(idString). This element has
 * an onclick property that can be set to the function you want to run.
 *
 * Full example:
 *
 * 	   document.getElementById('roll-dice').onclick = rollDice;
 *
 *     function rollDice() {
 *       // code there
 *     }
 *
 * Resources:
 * 	 - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
 */

document.getElementById('roll-dice').onclick = function() {
  console.log("Hit!");
  document.getElementById('first-die').className = 'dice dice-'+getRandomNumber();
  document.getElementById('second-die').className = 'dice dice-'+getRandomNumber();

}

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
