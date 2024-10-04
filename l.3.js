let fname = "Jose Cruz";
let i = 0;  // Initialize 'i'

while (i < fname.length) {  // Condition to check
    let c = 2 + i;
    let nLengthCounterTwo = fname.length - c;
    console.log(fname);
    console.log("Iterations Name was Printed: " + i);
    
    i++;  // Increment 'i' at the end of each loop iteration
}