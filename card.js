// Save this as script.js
const cards = [
    "🍎", "🍎",
    "🍌", "🍌",
    "🍇", "🍇",
    "🍓", "🍓",
    "🍍", "🍍",
    "🥝", "🥝",
    "🍉", "🍉",
    "🍒", "🍒"
];
let flippedCards = [];
let matchedCards = [];
let isFlipping = false;

// Initialize the game
function initializeGame() {
    const gameBoard = document.getElementById("game-board");
    const result = document.getElementById("result");
    flippedCards = [];
    matchedCards = [];
    isFlipping = false;
    result.textContent = "";

    // Shuffle cards
    const shuffledCards = cards.sort(() => 0.5 - Math.random());

    // Render cards
    gameBoard.innerHTML = "";
    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.index = index;
        cardElement.dataset.value = card;
        cardElement.textContent = "?";
        cardElement.addEventListener("click", handleCardClick);
        gameBoard.appendChild(cardElement);
    });
}

// Handle card click
function handleCardClick(event) {
    const clickedCard = event.target;

    // Ignore clicks on already matched or flipped cards
    if (isFlipping || clickedCard.classList.contains("flipped") || matchedCards.includes(clickedCard.dataset.index)) {
        return;
    }

    // Flip the card
    clickedCard.textContent = clickedCard.dataset.value;
    clickedCard.classList.add("flipped");
    flippedCards.push(clickedCard);

    // Check for a match
    if (flippedCards.length === 2) {
        isFlipping = true;
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.dataset.value === secondCard.dataset.value) {
            // Cards match
            matchedCards.push(firstCard.dataset.index, secondCard.dataset.index);
            flippedCards = [];
            isFlipping = false;

            // Check if all cards are matched
            if (matchedCards.length === cards.length) {
                document.getElementById("result").textContent = "🎉 You matched all the cards!";
            }
        } else {
            // Cards don't match - flip them back after a short delay
            setTimeout(() => {
                firstCard.textContent = "?";
                secondCard.textContent = "?";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                flippedCards = [];
                isFlipping = false;
            }, 1000);
        }
    }
}

// Start the game on page load
document.addEventListener("DOMContentLoaded", initializeGame);
