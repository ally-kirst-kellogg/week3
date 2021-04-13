// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

function pageLoad() {
  // we start with the dice from the first practice exercise
  let die1 = getRandomInt(6)
  let die2 = getRandomInt(6)
  let total = die1 + die2
  let output

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:
//   - If the total of the two dice is 7 or 11, the player wins
//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

// Write the recipe (algorithm) in the comments. Write the code.
if (total == 7 || total == 11) {
    output = 'you win!'
  } else if (total == 2 || total == 3 || total == 12) {
    output = 'you lose!'
  } else {
    output = `the point is ${total}`
  }
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  // Leave this alone
  document.querySelector('.die1').setAttribute('src', `../images/dice/${die1}.png`)
  document.querySelector('.die2').setAttribute('src', `../images/dice/${die2}.png`)
  document.querySelector('.total').innerHTML = total
  document.querySelector('.output').innerHTML = output
}