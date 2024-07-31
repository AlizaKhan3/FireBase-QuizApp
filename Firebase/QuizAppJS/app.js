// JS WORK REMAINING
import { auth, onAuthStateChanged, signOut } from "./firebase.js"
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
    console.log("user id", user);
    // ...
  } else {
    // User is signed out
    console.log("user not login ");
    // ...
  }
});


signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

const username = document.getElementById("username");
const startScreen = document.querySelector(".startScreen");
const endScreen = document.querySelector(".endScreen");
const playground = document.querySelector(".playground");
const questionNumber = document.querySelector(".questionNumber");
const timer = document.getElementById("timer");
const options = document.getElementById("options");
const question = document.getElementById("question");
const quizBody = document.querySelector(".quizBody");
const loader = document.querySelector(".loader");
const finalScore = document.querySelector(".finalScore");
const resultUsername = document.querySelector(".resultUsername");
let start = document.getElementById("start");
start.addEventListener("click", startQuiz);

let questionIndex = 0;
let arrayQuestion = [];
let score = [];
let count = 30;

function startQuiz() {
  if (username.value !== "") {
    console.log(username.value);
    startScreen.style.display = "none";
    playground.style.display = "block";
    loader.style.display = "block";

    loadQuestions();
  } else {
    username.style.border = "0.5px solid red"
    username.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)"
  }
}

// using quiz api "opentdb-trivia"
let QUIZ_URL = "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
function loadQuestions() {
  fetch(QUIZ_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      arrayQuestion = data.results;
      displayQuestions(arrayQuestion[questionIndex]);
    });
}

function displayQuestions(questionData) {
  console.log(questionData);
  question.innerHTML = questionData.question;
  // questionNumber.innerHTML = questionIndex ++;
  loadOptions(questionData);
}

function loadOptions(questionData) {
  options.innerHTML = " ";
  let correctAnswer = questionData.correct_answer;
  let incorrectAnswers = questionData.incorrect_answers;
  
  // Combine correct and incorrect answers into a single array
  let answers = [...incorrectAnswers];
  
  // Insert the correct answer at a random index
  let randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
  answers.splice(randomIndex, 0, correctAnswer);
  
  console.log(answers);

  loader.style.display = "none";
}