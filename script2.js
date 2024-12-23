document.addEventListener("DOMContentLoaded", function() {
    generateProblem(1);
    generateProblem(2);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem(problemNumber) {
    const num1 = getRandomInt(1, 5);
    const num2 = getRandomInt(1, 5);
    const correctAnswer = num1 + num2;

    // Fixing string interpolation and template literals
    document.getElementById(`question${problemNumber}`).textContent = `What is ${num1} + ${num2}?`;

    const imageContainer = document.getElementById(`images${problemNumber}`);
    imageContainer.innerHTML = '';

    for (let i = 0; i < num1; i++) {
        const img = document.createElement("img");
        img.src = "https://thumbs.dreamstime.com/b/ice-cream-waffle-horn-blue-ice-cream-waffle-horn-isolated-white-background-119394394.jpg";
        img.alt = `Ice Cream ${i + 1}`;
        imageContainer.appendChild(img);
    }
    
    for (let i = 0; i < num2; i++) {
        const img = document.createElement("img");
        img.src = "https://img.freepik.com/premium-photo/illustration-ice-cream-detail-single-color-background_945369-6244.jpg";
        img.alt = `Ice Cream ${num1 + i + 1}`;
        imageContainer.appendChild(img);
    }

    // Storing the correct answer in a data attribute
    document.getElementById(`answer${problemNumber}`).dataset.correctAnswer = correctAnswer;
}

function checkAnswer(problemNumber) {
    const userAnswer = document.getElementById(`answer${problemNumber}`).value;
    const correctAnswer = document.getElementById(`answer${problemNumber}`).dataset.correctAnswer;
    const feedbackElement = document.getElementById(`feedback${problemNumber}`);

    if (parseInt(userAnswer) === parseInt(correctAnswer)) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        feedbackElement.style.color = "red";
    }
}
