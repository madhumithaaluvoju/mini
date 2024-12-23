// Expanded dataset with more questions
const questions = [
    {
        question: "What is the color of the sky?",
        options: ["Green", "Blue", "Yellow", "Pink"],
        correct: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFpq-oj6wSRO4XZXhHxKOJb_qVdaAzJhUYQ&s"
    },
    {
        question: "What animal is known as man's best friend?",
        options: ["Cat", "Dog", "Horse", "Elephant"],
        correct: 1,
        image: "https://media.istockphoto.com/id/1204163981/photo/guy-and-his-dog-golden-retriever-nature.jpg?s=612x612&w=0&k=20&c=5UvLYuB4PkIWjZQczCzMoIS8evRik8KenhrLhLKGWoU="
    },
    {
        question: "Which fruit is red and has seeds on its skin?",
        options: ["Apple", "Strawberry", "Banana", "Grapes"],
        correct: 1,
        image: "https://images.theconversation.com/files/621301/original/file-20240924-18-v804t4.jpg?ixlib=rb-4.1.0&rect=3%2C0%2C2659%2C1497&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/7/house-number-4-in-numerology_0_1200.jpg"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2,
        image: "https://cdn.mos.cms.futurecdn.net/Mza6ccKYF6WVrqZekTtJxN.jpg"
    },
    {
        question: "Which vehicle moves on tracks?",
        options: ["Car", "Bicycle", "Train", "Airplane"],
        correct: 2,
        image: "https://www.indiaspend.com/h-upload/2023/04/15/945591-updated-indian-railways-data-1500.webp"
    },
    {
        question: "What is this Animal Name?",
        options: ["Elephant", "Lion", "Fox", "Deer"],
        correct: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxdSH8iRklGceHoN5Yo4zv07Id83wnEfw8A&s"
    }
];

// Function to shuffle questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledQuestions = shuffleArray([...questions]); // Shuffle questions
let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
    const imageContainer = document.getElementById("quiz-image");

    // Get current question
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    // Display question and image
    questionContainer.textContent = currentQuestion.question;
    imageContainer.src = currentQuestion.image;

    // Clear and display options
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("quiz-option");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });

    // Hide the Next button initially
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById("quiz-options");

    // Disable all options
    Array.from(optionsContainer.children).forEach((option, index) => {
        option.onclick = null;
        if (index === currentQuestion.correct) {
            option.classList.add("correct");
        } else if (index === selectedIndex) {
            option.classList.add("wrong");
        }
    });

    // Show the Next button
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        displayQuestion();
    } else {
        // End of quiz
        document.getElementById("quiz-container").innerHTML = `
            <div class="quiz-header">Quiz Complete!</div>
            <p>Well done! You finished the quiz.</p>
            <button onclick="restartQuiz()">Refresh Quiz</button>
        `;
    }
}

function restartQuiz() {
    // Reset question index
    currentQuestionIndex = 0;

    // Restore the original quiz container layout
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <div id="quiz-image-container">
            <img id="quiz-image" src="" alt="Quiz Image">
        </div>
        <div id="quiz-question" class="quiz-header"></div>
        <div id="quiz-options" class="quiz-options"></div>
        <button id="next-button" onclick="nextQuestion()" style="display: none;">Next Question</button>
    `;

    // Call displayQuestion to start again
    displayQuestion();
}


// Initialize quiz on page load
document.addEventListener("DOMContentLoaded", displayQuestion);
