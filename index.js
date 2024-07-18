

// let signupbtn= document.querySelector(".signupbtn");
// let signinbtn= document.querySelector(".signinbtn");
// let nameinput=document.querySelector(".nameinput");
// let heading=document.querySelector(".heading");
// let submit=document.querySelector(".submit");
// let emaildata=document.querySelector(".emaildata");
// let email;


// //signin

// function hello(){
//     nameinput.style.maxHeight ='0' ;
//     heading.innerHTML="Sign In";
//     signupbtn.classList.add('new');
//     signinbtn.classList.remove('new');
//     submit.innerHTML='Login'
    
//     // handleSubmit();
   
    
// }

// //signup
// function bye(){
//     nameinput.style.maxHeight ='60px' ;
//     heading.innerHTML="Sign Up";
//     signupbtn.classList.remove('new');
//     signinbtn.classList.add('new');
//     submit.innerHTML='Submit';
   
   

// }



// // Validation function for email format
// function isValidEmail(email) {
//     // Basic regex for email validation
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// // Function to handle signup form submission
// function handleSignup() {
//     let name = document.querySelector('input[type="string"]').value.trim();
//     let email = emaildata.value.trim();
//     let password = document.querySelector('input[type="password"]').value.trim();

//     // Perform validation
//     if (name === '') {
//         alert('Please enter your name.');
//         return false;
//     }

//     if (email === '') {
//         alert('Please enter your email.');
//         return false;
//     }

//     if (!isValidEmail(email)) {
//         alert('Please enter a valid email address.');
//         return false;
//     }

//     if (password === '') {
//         alert('Please enter your password.');
//         return false;
//     }

//     // If all validations pass, you can proceed with signup
//     console.log('Signup Data:');
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // Optionally, you can redirect, show success message, etc.
//     return true;
// }

// // Function to handle signin form submission
// function handleSignin() {
//     let email = emaildata.value.trim();
//     let password = document.querySelector('input[type="password"]').value.trim();

//     // Perform validation
//     if (email === '') {
//         alert('Please enter your email.');
//         return false;
//     }

//     if (!isValidEmail(email)) {
//         alert('Please enter a valid email address.');
//         return false;
//     }

//     if (password === '') {
//         alert('Please enter your password.');
//         return false;
//     }

//     // If all validations pass, you can proceed with signin
//     console.log('Signin Data:');
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // Optionally, you can redirect, show success message, etc.
//     return true;
// }

// // Event listener for submit button click
// submit.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     if (signinbtn.classList.contains('new')) {
//         isValidEmail(email);
//         handleSignup();
//         // If the Sign Up button is active
//         if (handleSignup()) {
//             // Logic for successful signup
//             console.log('Signup successful!');
//         }
//     } else {
//         isValidEmail(email);
//         handleSignin();
//         // If the Sign In button is active
//         if (handleSignin()) {
//             // Logic for successful signin
//             window.location.href = "https://www.geeksforgeeks.org/";
//             console.log('Signin successful!');
//         }
//     }
// });


















// _--------------------------------------------

let signupbtn = document.querySelector(".signupbtn");
let signinbtn = document.querySelector(".signinbtn");
let nameinput = document.querySelector(".nameinput");
let heading = document.querySelector(".heading");
let submit = document.querySelector(".submit");
let emaildata = document.querySelector(".emaildata");

// Function for sign-in button click
function hello() {
    nameinput.style.maxHeight = '0';
    heading.innerHTML = "Sign In";
    signupbtn.classList.add('new');
    signinbtn.classList.remove('new');
    submit.innerHTML = 'Login';
}

// Function for sign-up button click
function bye() {
    nameinput.style.maxHeight = '60px';
    heading.innerHTML = "Sign Up";
    signupbtn.classList.remove('new');
    signinbtn.classList.add('new');
    submit.innerHTML = 'Submit';
}

// Validation function for email format
function isValidEmail(email) {
    // Basic regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Event listener for submit button click
submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    let name = document.querySelector('input[type="string"]').value.trim();
    let email = emaildata.value.trim();
    let password = document.querySelector('input[type="password"]').value.trim();

    if (signinbtn.classList.contains('new')) {
        // If the Sign Up button is active
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;
        }
        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        // Logic for successful signup
        console.log('Signup Data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        // Handle signup success (e.g., redirect, show success message)
    } else {
        // If the Sign In button is active
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;
        }
      

        // Logic for successful signin
        console.log('Signin Data:');
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Handle signin success (e.g., redirect, show success message)
        window.location.href = "https://www.geeksforgeeks.org/";
    }
});
