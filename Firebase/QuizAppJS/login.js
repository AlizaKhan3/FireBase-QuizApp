import {auth, signInWithEmailAndPassword} from "./firebase"

function loginNow(){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Login");
      window.location.href = "./quizMain.html";
    },5000)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // console.log("error-->", errorMessage)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong! " + errorMessage,
    });
    });
}

let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", loginNow)