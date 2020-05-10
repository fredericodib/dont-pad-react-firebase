import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkyMDbJ7gQmz6hHeONPzx3PY2_jpzfByg",
  authDomain: "dontpad-cjr.firebaseapp.com",
  databaseURL: "https://dontpad-cjr.firebaseio.com",
  projectId: "dontpad-cjr",
  storageBucket: "dontpad-cjr.appspot.com",
  messagingSenderId: "948733539953",
  appId: "1:948733539953:web:695eee936c230bd2810dd0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
