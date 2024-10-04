// Importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();
// Declare variables for username, passcode, and re-entered password (simulating user input)
let username = prompt("Enter your username: ");  // Variable to hold the username input
let passcode = prompt("Enter your password: ");  // Variable to hold the registered password input
let repasscode = prompt("Re-enter your password: ");  // Variable to hold the re-entered password input

// Check if the registered password and re-entered password match
if (passcode === repasscode) {
    // If the passwords match, notify the user of successful registration
    alert("Password confirmed successfully.");

    // Prompt the user to log in by entering their username
    let loginUsername = prompt("Username: ");  // Variable to hold the entered username on login

    // Check if the registered username matches the entered username
    if (username === loginUsername) {
        // If the usernames match, prompt the user to enter their password for login
        let loginPassword = prompt("Password: ");  // Variable to hold the entered password on login

        // Check if the registered password matches the entered password
        if (passcode === loginPassword) {
            // If both username and password are correct, display a success message
            alert("Welcome to DSA, " + username);
        } else {
            // If the password is incorrect, notify the user
            alert("Incorrect Password, Re-run the code!");
        }
    } else {
        // If the username is incorrect, notify the user
        alert("Incorrect Username, Re-run the code!");
    }
} else {
    // If the registered password and re-entered password do not match, notify the user
    alert("Password does not match, Re-run the code!");
}
