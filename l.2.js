// a.
// Declare a variable 'age' and set it to 18
let age = 18;

// Check if the person is 18 or older
if (age >= 18) {
    // If true, the person is eligible to register as a voter
    console.log("You may now Register as a Voter for Elections 2025");
} else {
    // If false, the person is too young to register
    console.log("You are too young to register as a voter for Election 2025");
}

// b.

// Declare a variable 'genAverage' and set it to 85
let genAverage = 85;

// Check if the general average is 85 or higher
if (genAverage >= 85) {
    // If true, the student can enroll in all course programs
    console.log("You may enroll in all Course Programs");
} 
// If the average is less than 85 but greater than 82
else if (genAverage < 85 && genAverage > 82) {
    // The student can enroll in any course except CTE, SCJE, and CHS
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} 
// If the average is 82 or lower
else {
    // The student can enroll in any course except CTE, SCJE, CHS, and CCS
    console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}
