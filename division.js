// Division problems for KG students
let problem1 = {
    totalObjects: 6,   // Total objects to divide
    groups: 2,         // Number of groups to divide by
    correctAnswer: 3   // Correct answer: 6 ÷ 2 = 3
};

let problem2 = {
    totalObjects: 8,   // Total objects to divide
    groups: 4,         // Number of groups to divide by
    correctAnswer: 2   // Correct answer: 8 ÷ 4 = 2
};

// Display the questions and objects
document.getElementById("question1").innerText = `How many objects in each group if ${problem1.totalObjects} objects are divided into ${problem1.groups} groups?`;
document.getElementById("question2").innerText = `How many objects in each group if ${problem2.totalObjects} objects are divided into ${problem2.groups} groups?`;

function displayObjects(problem, id) {
    let container = document.getElementById(`object-images${id}`);
    container.innerHTML = "";

    // Divide totalObjects into the specified number of groups
    let objectsPerGroup = problem.totalObjects / problem.groups;
    for (let i = 0; i < problem.groups; i++) {
        for (let j = 0; j < objectsPerGroup; j++) {
            let img = document.createElement("img");
            img.src = "https://thumbs.dreamstime.com/b/ice-cream-waffle-horn-blue-ice-cream-waffle-horn-isolated-white-background-119394394.jpg";  // Use any image or placeholder
            img.alt = "Object";
            img.style.margin = "5px";
            
            
            // Set the size of the image (adjust the width and height as needed)
            img.width = 100;  // Decrease width to 30px
            img.height = 100; // Decrease height to 30px

            container.appendChild(img);
        }
        // Add a line break after each group for clarity
        container.appendChild(document.createElement("br"));
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
