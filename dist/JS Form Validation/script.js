let form = document.querySelector('form');
let inp = document.querySelectorAll('input');

let userName = document.querySelector('#userName');
let mail = document.querySelector('#mail');

let error1 = document.querySelector('#error1');
let error2 = document.querySelector('#error2');
let passwordError = document.querySelector('#passworderror');

let confirmPasswordError = document.querySelector('#confpassword');
let correct = document.querySelector('#correct');

let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm');

function validate(event) {
    event.preventDefault();

    inp.textContent = ''
    error1.textContent = '';
    error2.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    correct.textContent = '';

    let isTrue = true;

    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Username Validation
    if (!usernameRegex.test(userName.value)) {
        error1.textContent = 'Invalid username (at least 3 chars)';
        isTrue = false;
    }

    // Email Validation
    if (!emailRegex.test(mail.value)) {
        error2.textContent = 'Invalid email address';
        isTrue = false;
    }

    // Password Validation
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = 'Password must be 8+ chars with uppercase, lowercase, number & special char';
        isTrue = false;
    }

    // Confirm Password Validation 
    if (password.value !== confirmPassword.value || confirmPassword.value === '') {
        confirmPasswordError.textContent = 'Passwords do not match';
        isTrue = false;
    }

    // Final Check
    if (isTrue) {
        correct.textContent = 'Everything is correct! Form submitted successfully';
        form.reset()
    }
}

form.addEventListener('submit', validate);