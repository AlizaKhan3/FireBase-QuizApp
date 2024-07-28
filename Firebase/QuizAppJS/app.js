// JS WORK REMAINING
import { auth, onAuthStateChanged, signOut} from "./firebase.js"
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