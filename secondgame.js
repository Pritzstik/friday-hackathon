//PSEUDOCODE
// Define a readline constant
// Define RL as a constant to crate an interface 
// Set input to process.stdin
// Set output to process.stdout
// Open the rl interface for user input
// Prompt the user to guess a number between 1 and 10
// Store the user's input as playerNumber
// Generate a random number between 1 and 10 as computerNumber
// Compare playerNumber and computerNumber
// If they are equal, print "Your guess is right"
// If they are not equal, print "Wrong number!"
// Close the rl interface

// Answer the question in the terminal
// See the outcome in the terminal


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question("Guess a number between 1 and 10: ", function(answer) {
    const playerNumber = parseInt(answer)
    const computerNumber = Math.floor(Math.random() * 10) + 1
    
    if(playerNumber === computerNumber){
    console.log("Your guess is right")
    } else {
    console.log("Wrong number!")
    }
rl.close();
});