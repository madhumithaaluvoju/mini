// Save this as script.js
let randomNumber;
let attempts;

// Initialize the game
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;

    document.getElementById("feedback").textContent = "Start guessing...";
    document.getElementById("guess").value = "";
    document.getElementById("submit-guess").style.display = "inline-block";
    document.getElementById("restart-game").style.display = "none";

    console.log(`Random number (debug): ${randomNumber}`); // Debugging line
}

// Check the user's guess
function checkGuess() {
    const guessInput = document.getElementById("guess");
    const feedback = document.getElementById("feedback");
    const guess = parseInt(guessInput.value, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        feedback.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        endGame();
    } else if (guess < randomNumber) {
        feedback.textContent = "📉 Too low! Try again.";
    } else {
        feedback.textContent = "📈 Too high! Try again.";
    }
}

// End the game
function endGame() {
    document.getElementById("submit-guess").style.display = "none";
    document.getElementById("restart-game").style.display = "inline-block";
}

// Add event listeners
document.getElementById("submit-guess").addEventListener("click", checkGuess);
document.getElementById("restart-game").addEventListener("click", initializeGame);

// Start the game on page load
initializeGame();
