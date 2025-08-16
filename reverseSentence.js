/*
 ! Problem: Reverse a full sentence.

 ? Proccess:
    *  return reversed string
 */

// function
function myFunc(value) {
    return value.split(' ').reverse().join(' ')
}

// print the values
const text = 'I love JavaScript';

myFunc(text)