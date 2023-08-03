import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { auth } from './firebase.js'

// const signInForm = document.getElementById('login-form');

// signInForm.addEventListener('submit', async e => {
//   e.preventDefault();
//  const email = signInForm['login-email'].value;
//  const password = signInForm['login-password'].value;
//
//  try {
//  const credentials = await signInWithEmailAndPassword(auth, email, password);
// const modal = bootstrap.Modal.getInstance(document.getElementById(''))
// } catch (error) {
//    console.log(error);
// }
//})