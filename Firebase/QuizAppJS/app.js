import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyACwCdxNhLnEE4AvdXdXjCphFTcqk8aZ8Y",
    authDomain: "quiz-app-by-aliza.firebaseapp.com",
    projectId: "quiz-app-by-aliza",
    storageBucket: "quiz-app-by-aliza.appspot.com",
    messagingSenderId: "272373264068",
    appId: "1:272373264068:web:da2a0ac9a1b75f474c2391"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const register = () => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    console.log("User Registered");
    console.log(email.value, password.value)


    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("user-->", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage)
    });
}

let registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register);


function loginNow(){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log("error-->", errorMessage)
    });

}

let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", loginNow)