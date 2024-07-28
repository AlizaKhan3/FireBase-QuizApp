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


export {
    auth,
    signInWithEmailAndPassword
}
