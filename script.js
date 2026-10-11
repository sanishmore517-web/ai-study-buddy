const topicInput = document.getElementById("topic"); 
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

    if (option.dataset.answer === "correct") {
      score++;
      quizScore.textContent = "Score: " + score;
      quizFeedback.textContent = "Correct! Great job!";
    } else {
      quizFeedback.textContent = "Not quite! Try again next time.";
    }

    quizOptions.forEach(function (button) {
      button.disabled = true;
    });
  }); 
});
