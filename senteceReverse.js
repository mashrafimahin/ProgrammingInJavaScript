/*
 ! Problem: Reverse a Sentece

 ? Proccess:
    *  split the inputed text
    *  use reverse function
 */

// function
function myFunc(str) {
    // split
    let splited = str.split(' ');
    // return reversed value
    return splited.reverse().join(' ');
}

// print value
const str = 'I love JavaScript';
myFunc(str)