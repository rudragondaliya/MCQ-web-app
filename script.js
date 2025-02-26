const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
        answer: "Bill Gates"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(option, button));
        optionsEl.appendChild(button);
    });
}

function selectAnswer(selected, button) {
    let correct = questions[currentQuestionIndex].answer;
    
    if (selected === correct) {
        button.style.background = "green";
        score++;
    } else {
        button.style.background = "red";
    }

    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
}

function resetState() {
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    loadQuestion();
}


loadQuestion();
