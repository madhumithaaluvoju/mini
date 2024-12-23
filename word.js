// Save this as script.js
const words = ["apple", "banana", "cherry", "orange", "grape", "kiwi", "lemon", "mango", "peach", "plum"];
let currentWord = "";
let scrambledWord = "";
let score = 0;

// Initialize the game
function initializeGame() {
    document.getElementById("feedback").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("next-word").style.display = "none";
    document.getElementById("submit-guess").style.display = "inline-block";

    // Pick a random word
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);

    // Display scrambled word
    document.getElementById("word").textContent = scrambledWord;
}

// Scramble the letters of a word
function scrambleWord(word) {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join("");
}

// Check the user's guess
function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    const feedback = document.getElementById("feedback");

    if (guess === currentWord) {
        feedback.textContent = `🎉 Correct! The word was "${currentWord}".`;
        score++;
        document.getElementById("score").textContent = score;
        document.getElementById("next-word").style.display = "inline-block";
        document.getElementById("submit-guess").style.display = "none";
    } else {
        feedback.textContent = "❌ Incorrect. Try again!";
    }
}

// Add event listeners
document.getElementById("submit-guess").addEventListener("click", checkGuess);
document.getElementById("next-word").addEventListener("click", initializeGame);

// Start the game on page load
initializeGame();
