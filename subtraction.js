document.addEventListener("DOMContentLoaded", function() {
    generateProblem(1);
    generateProblem(2);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem(problemNumber) {
    const num1 = getRandomInt(5, 10);
    const num2 = getRandomInt(1, num1);
    const correctAnswer = num1 - num2;

    document.getElementById(`question${problemNumber}`).textContent = `What is ${num1} - ${num2}?`;

    const totalImageContainer = document.getElementById(`total-images${problemNumber}`);
    const subtractedImageContainer = document.getElementById(`subtracted-images${problemNumber}`);
    totalImageContainer.innerHTML = '';
    subtractedImageContainer.innerHTML = '';

    // Total ice creams
    for (let i = 0; i < num1; i++) {
        const img = document.createElement("img");
        img.src = "https://thumbs.dreamstime.com/b/ice-cream-waffle-horn-blue-ice-cream-waffle-horn-isolated-white-background-119394394.jpg";
        img.alt = `Ice Cream ${i + 1}`;
        totalImageContainer.appendChild(img);
    }

    // Subtracted ice creams
    for (let i = 0; i < num2; i++) {
        const img = document.createElement("img");
        img.src = "https://th.bing.com/th/id/OIP.nv-vMWI0GjJx63vOYkH7RwAAAA?rs=1&pid=ImgDetMain";
        img.alt = `Subtracted Ice Cream ${i + 1}`;
        subtractedImageContainer.appendChild(img);
    }

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
