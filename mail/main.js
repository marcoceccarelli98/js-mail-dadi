'use strict'
// EMAIL VALIDATION

// -get email from prompt // userEmail
const userEmail = prompt('Insert Email');

// -initialize an array of strings as "emails" // Emails
const emails = ['mariorossi66@libero.it', 'francescototti10@asroma.it', 'marco.ceccarelli@gmail.com', 'mceccarelli98@gmail.com'];

// -initialize a boolean var for check email validation // emailValidation
let emailValidation = false;

// -use for cicle for check every string in the array
for (let i = 0; i < emails.length; i++) {
    //-if the user email string is the same of the one in the array
    if (userEmail === emails[i]) {
        //-turn email validation true
        emailValidation = true;
        //-print "Email correct!"
        console.log('Email correct!');
        //-exit the for cicle
        break;
    }
}
// -if the validation is false
if (!emailValidation) {
    //     -print "Email not correct!"
    console.log('Email not correct!');
}
