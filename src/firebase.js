import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnBeJwepJUz8yo8jF6rVTDp8YeOv74njI",
  authDomain: "auth-firebase-fst.firebaseapp.com",
  projectId: "auth-firebase-fst",
  storageBucket: "auth-firebase-fst.appspot.com",
  messagingSenderId: "862112689119",
  appId: "1:862112689119:web:cc0b39b59317ab0040f26a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { auth, googleProvider, fbProvider, githubProvider };
