// setting up firebase

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDw2U-dCbMQSYadu253NhQAnEm2evkU77E",
  authDomain: "anyday-tutor.firebaseapp.com",
  projectId: "anyday-tutor",
  storageBucket: "anyday-tutor.appspot.com",
  messagingSenderId: "345147771309",
  appId: "1:345147771309:web:21639b90f43e0d68333924",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// sign up function

// const print = () => {
//   console.log("clicked");
// };
// //
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      location.href = "./home.html";
      // document.write("You are sign in");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert(error.code);
    });
};

// const sign in function

const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // console.log(email, password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      // document.write("You are sign up");
      console.log(result);
      location.href = "./login.html";

      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert(error.code);
    });
};

function confirmPassword() {
  let password = document.getElementById("password").value;
  let cnfrmPassword = document.getElementById("cnfrmPassword").value;
  console.log(password, cnfrmPassword);

  let message = document.getElementById("message").value;

  if (password.length != 0) {
    if (password == cnfrmPassword) {
      document.getElementById("message").textContent = "Password Matched";
      // message.textContent = "Password Match";
      document.getElementById("message").style.backgroundColor = "Green";
    } else {
      // message.textContent = "tf";
      document.getElementById("message").textContent = "Error";
      // message.textContent = "Password Match";
      document.getElementById("message").style.backgroundColor = "Red";
    }
  }
}
