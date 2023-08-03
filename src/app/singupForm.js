import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { auth } from './firebase.js'

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm['login-email'].value;
    const password = signupForm['login-password'].value;
    console.log(email, password);
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        const signUpMode = document.getElementById('modal'); 
       // const modal = new bootstrap.Modal(signUpMode);
        const modal = bootstrap.Modal.getInstance(document.getElementById('modal'))
        modal.hide(); 
        showMessage('Welcome')
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            alert('Email inválido');
        }
    }
});
