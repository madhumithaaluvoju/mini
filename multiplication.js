// Multiplication problems for KG students
let problem1 = {
    factor1: 2,
    factor2: 3,
    correctAnswer: 6
};

let problem2 = {
    factor1: 4,
    factor2: 2,
    correctAnswer: 8
};

// Display the questions and objects
document.getElementById("question1").innerText = `What is ${problem1.factor1} x ${problem1.factor2}?`;
document.getElementById("question2").innerText = `What is ${problem2.factor1} x ${problem2.factor2}?`;

function displayObjects(problem, id) {
    let container = document.getElementById(`object-images${id}`);
    container.innerHTML = "";
    for (let i = 0; i < problem.factor1; i++) {
        for (let j = 0; j < problem.factor2; j++) {
            let img = document.createElement("img");
            img.src = "https://th.bing.com/th/id/OIP.nv-vMWI0GjJx63vOYkH7RwAAAA?rs=1&pid=ImgDetMain";  // Use any image or placeholder
            img.alt = "Object";
            img.style.margin = "5px"; img.width = 100;  // Decrease width to 30px
            img.height = 100;
            container.appendChild(img);
        }
    }
}

displayObjects(problem1, 1);
displayObjects(problem2, 2);

// Check answer function
function checkAnswer(problemNumber) {
    let answer = document.getElementById(`answer${problemNumber}`).value;
    let feedback = document.getElementById(`feedback${problemNumber}`);

    if (problemNumber === 1) {
        if (parseInt(answer) === problem1.correctAnswer) {
            feedback.innerText = "Correct! Great job!";
            feedback.style.color = "green";
        } else {
            feedback.innerText = "Oops! Try again.";
            feedback.style.color = "red";
        }
    } else if (problemNumber === 2) {
        if (parseInt(answer) === problem2.correctAnswer) {
            feedback.innerText = "Correct! Great job!";
            feedback.style.color = "green";
        } else {
            feedback.innerText = "Oops! Try again.";
            feedback.style.color = "red";
        }
    }
}
