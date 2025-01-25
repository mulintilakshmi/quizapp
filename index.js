const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Albert Einstein", "Nikola Tesla", "Alexander Graham Bell"],
        correctAnswer: "Thomas Edison"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    const currentQuestion = quizData[currentQuestionIndex];

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
        <p>${currentQuestion.question}</p>
        <div>
            ${currentQuestion.options.map((option, index) => `
                <label>
                    <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                    ${option}
                </label><br>
            `).join("")}
        </div>
    `;

    quizContainer.innerHTML = ''; // Clear previous question
    quizContainer.appendChild(questionElement);
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    
    if (selectedOption && selectedOption.value === quizData[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    // Load next question or show the result
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Your score is ${score} out of ${quizData.length}`;
}

// Load the first question on page load
loadQuestion();
