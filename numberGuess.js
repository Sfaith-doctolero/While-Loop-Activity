//Name: JAvinar, Stephanie Faith D. 
//Course, Year, and Section: BSCS 1D
//math.floor makes sure that the answer is a whole number 
//math.random returns a random number that the guess needs to find out
let correctNumber = Math.floor(Math.random() * 10) + 1; 
let guess;

while (guess != correctNumber) {
    guess = prompt("Guess a number between 1 and 10:");
    guess = Number(guess);

    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}
