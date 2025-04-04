function rollDice(){
    for (let i = 1; i <= 5; i++) {
        const result = Math.floor(Math.random() * 6) + 1;
        console.log(`Die ${i}: ${result}`);
    }
}
rollDice();