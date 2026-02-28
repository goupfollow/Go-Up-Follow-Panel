import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACG8FSXO9C47ohGPX_GGYslmgwW0flOt4",
  authDomain: "go-up-follow-panel.firebaseapp.com",
  projectId: "go-up-follow-panel",
  storageBucket: "go-up-follow-panel.firebasestorage.app",
  messagingSenderId: "11877826773",
  appId: "1:11877826773:web:edc9e4db93f0833544225c",
  measurementId: "G-NL4M70CTDN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");
const userEmail = document.getElementById("userEmail");

loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Login Success");
    })
    .catch((error) => {
      alert(error.message);
    });
});

logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginPage.style.display = "none";
    dashboard.style.display = "block";
    userEmail.innerText = user.email;
  } else {
    loginPage.style.display = "block";
    dashboard.style.display = "none";
  }
});