/*
 ! Problem: Factorialize a Number.

 ? Proccess:
    *  assume a variable with value = 1
    *  run loop and initial value will be from one
    *  inside the loop multiply the index(i) with assumed variable value
    *  return the assumed value
 */

// function
function myFunc(value) {
    // let a variable value is one
    let num = 1;

    // loop
    for (let i = 1; i <= value; i++) {
        num *= i
    }

    // return value
    return num;
}

// print the values
console.log(myFunc(5))
