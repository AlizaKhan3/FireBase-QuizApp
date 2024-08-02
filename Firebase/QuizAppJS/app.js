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
// const questionIndex = document.querySelector(".questionNumber");
const timer = document.getElementById("timer");
const options = document.getElementById("options");
const question = document.getElementById("question");
const quizBody = document.querySelector(".quizBody");
const loader = document.querySelector(".loader");
const finalScore = document.querySelector(".finalScore");
const resultUsername = document.querySelector(".resultUsername");

let start = document.getElementById("start");
start.addEventListener("click", startQuiz);

let questionIndex = 1;
let arrayQuestion = [];
let score = [];
let count = 30;
let countdown;

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
  count = 30;
  clearInterval(countdown);
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
  // console.log(answers);
  answers.forEach((answer) => {
    let option = document.createElement("option");
    option.innerHTML = answer;
    option.addEventListener("click", () => {
      checkAnswer(option, answers, questionData.correct_answer);
    })
    options.append(option);
  })
  loader.style.display = "none";
  displayTime();
}

function checkAnswer(answerOptions, answers, correctAnswer) {
  console.log(answerOptions, answers, correctAnswer);
  let correctElement;
  answers.forEach((answer) => {
    if (gethtmlValues(answer) === gethtmlValues(correctAnswer)) {
      correctElement = [...options.childNodes].find(
        (option) => option.innerText === gethtmlValues(correctAnswer)
      );
    }
  });
  options.childNodes.forEach((option) => {
    option.disabled = true; // disable all options
  });
  if (gethtmlValues(correctAnswer) === answerOptions.innerText) {
    answerOptions.classList.add("correct"); // add class to the clicked option
  } else {
    answerOptions.classList.add("Incorrect"); // add class to the clicked option
    correctElement.classList.add("correct"); // add class to the correct option
  }
  // console.log(correctElement);
  clearInterval(countdown);
}

//Next Button Code
let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", () => {
  timer.innerHTML = "30";
  questionIndex = questionIndex + 1;
  document.getElementById("questionIndex").innerHTML = questionIndex;
  displayQuestions(arrayQuestion[questionIndex - 1]); // Update questionIndex - 1 since arrays are 0-indexed
  if (questionIndex == 9) {
    nextBtn.innerText = "Submit"; // Update the button text
    // endScreen.style.display = "block";
    // playground.style.display = "none";
    // finalScore.innerHTML = `Your final score is ${score.length} out of ${arrayQuestion.length}`;
  } else {
    showAnswer();
  }
})

function showAnswer() { }

const displayTime = () => {
  countdown = setInterval(() => {
    count--;
    timer.innerHTML = count;

    if (count == 0) {
      clearInterval(countdown);

      options.childNodes.forEach((option) => {
      option.disabled = true; // disable all options
      });
    }
  }, 1000)

};


function gethtmlValues(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}