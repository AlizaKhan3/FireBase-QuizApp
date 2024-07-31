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

let arrayQuestion = [];
score = [];
count = 30;


function startQuiz(){
  if (username.value !== ""){
    console.log(username.value)
  }else{
    username.style.border = "0.5px solid red"
    username.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)"
  }
}

