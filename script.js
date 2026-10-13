let currentQuestion = 0;const topicInput = document.getElementById("topic"); 
const explainBtn = document.getElementById("explainBtn"); 
const explanation = document.getElementById("explanation"); 

const topics = { 
  "artificial intelligence": "Artificial Intelligence (AI) is a branch of computer science that enables machines to perform tasks that usually require human intelligence, such as understanding language and solving problems.", 
  "machine learning": "Machine Learning (ML) is a branch of AI that allows computers to learn patterns from data and make predictions without being explicitly programmed for every situation.", 
  "deep learning": "Deep Learning is a type of machine learning that uses neural networks with multiple layers to learn complex patterns from data." 
}; 

// 1. Topic Explanation Logic
explainBtn.addEventListener("click", function () { 
  const userTopic = topicInput.value.trim().toLowerCase(); 
  
  if (userTopic === "") { 
    explanation.textContent = "Please enter a topic first."; 
    return; 
  } 
  
  if (topics[userTopic]) { 
    explanation.textContent = topics[userTopic]; 
  } else { 
    explanation.textContent = "Sorry, this topic is not supported yet. Try Artificial Intelligence, Machine Learning, or Deep Learning."; 
  } 
}); // Added closing brackets to separate the functionalities

// 2. Quiz Logic (Moved outside and isolated)
const quizOptions = document.querySelectorAll(".quizOption"); 
const quizFeedback = document.getElementById("quizFeedback"); 
const quizScore = document.getElementById("quizScore"); 
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
let score = 0; // Keeping track of global score correctly


const quizQuestions = [
  {
    question: "What does AI stand for?",
    options: [
      "Automated Information",
      "Artificial Intelligence",
      "Advanced Internet"
    ],
    correctAnswer: 1
  },
  {
    question: "What does ML stand for?",
    options: [
      "Machine Learning",
      "Manual Logic",
      "Modern Language"
    ],
    correctAnswer: 0
  },
  {
    question: "What does Deep Learning use?",
    options: [
      "Only spreadsheets",
      "Neural networks with multiple layers",
      "Only calculators"
    ],
    correctAnswer: 1
  }
];
let questionAnswered = false;
quizOptions.forEach(function (option) {
  option.addEventListener("click", function () {

    if (questionAnswered) {
      return;
    }

    questionAnswered = true;
    nextQuestionBtn.disabled = false;

    
if (option.dataset.answer === "correct") {
  score++;
  quizScore.textContent = "Score: " + score;
  quizFeedback.textContent = "Correct! Great job!";
  option.style.backgroundColor = "lightgreen";
} else {
  quizFeedback.textContent = "Not quite! Try again next time.";
  option.style.backgroundColor = "lightcoral";
}


    quizOptions.forEach(function (button) {
      button.disabled = true;
    });
  }); 
});
function showQuestion() {
  const question = quizQuestions[currentQuestion];

  document.getElementById("quizQuestion").textContent =
    question.question;

  quizOptions.forEach(function (option, index) {
    option.textContent = question.options[index];

    option.dataset.answer =
      index === question.correctAnswer ? "correct" : "wrong";

    option.disabled = false;
  });

  quizFeedback.textContent = "Select an answer to begin.";
  questionAnswered = false;

  nextQuestionBtn.disabled = true;
}
// 3. Next Button & Initialization Logic
nextQuestionBtn.addEventListener("click", function () {
    currentQuestion++; // Move to the next question index
    
    // Check if there are more questions left
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        // Quiz is over
        document.getElementById("quizQuestion").textContent = "Quiz Completed!";
        quizFeedback.textContent = `Final Score: ${score} out of ${quizQuestions.length}`;
        nextQuestionBtn.disabled = true;
        quizOptions.forEach(button => button.style.display = 'none'); // Hide options
    }
});

// Initialize the very first question when the page loads
showQuestion();
