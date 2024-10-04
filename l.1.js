//a.
// Declare a variable age and set it to 18
let age = 18;

// Declare a variable 'genAverage' (general average) and set it to 83
let genAverage = 83;

// Use the ternary operator to check if both conditions are true:
// 1. Age is greater than or equal to 18
// 2. General average is greater than or equal to 83
const result = ((age >= 18 && genAverage >= 83) 
  ? "You may enter college, under BSCS Program"  // If both conditions are true, this message is returned
  : "Both condition may have not met and not allowed to enroll");  // If either condition is false, this message is returned

// Output the result to the console
console.log(result);

//b.
//Declare a Variable name subject1 and set it to DSA
let subject1 = "DSA";
//Declare a Variable name subject2 and set it to Math101
let subject2 = "Math101"
//Declare a Variable name grade and set it to 80
let grade = 80;
// Use the ternary operator to check if both conditions are true:
// 1. subject is Strict Equality or equal to DSA and Math101
// 2. grade is greater than or equal to 80
const res = ((subject1 === "DSA" && grade >= 80) 
? "You may enroll Application Development" // If true, the student can enroll in Application Development
:(subject2 === "Math101" && grade <= 80 ) ? "You may enroll Calculus" 
: "You have to enroll DSA and Pass to enroll AD and Math101 and pass to enroll Calculus");// If true, the student can enroll in Calculus
// Output the result to the console
console.log(res);
