
//PSEUDOCODE
// Define a function called rollDice
//     Repeat 5 times:
//         Generate a random number between 1 and 6 
//         Print the roll number and the result 

// Call the rollDice function



function rollDice(){
    for (let i = 1; i <= 5; i++) {
        const result = Math.floor(Math.random() * 6) + 1;
        console.log(`Die ${i}: ${result}`);
    }
}
rollDice();

