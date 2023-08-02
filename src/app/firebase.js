  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"

  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDLOdNi6p9Ff5Xjp1o2gPW3FutdLeKq1ew",

    authDomain: "reshipi-d3dc7.firebaseapp.com",

    projectId: "reshipi-d3dc7",

    storageBucket: "reshipi-d3dc7.appspot.com",

    messagingSenderId: "979920881608",

    appId: "1:979920881608:web:0347cd3d72676b25a9a2fd"

  };


  // Initialize Firebase

  export const app = initializeApp(firebaseConfig);
  console.log(app);
  export const auth = getAuth(app);