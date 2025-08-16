/*
 ! Problem: Find longest word from sentence.

 ? Proccess:
    *  split input value
    *  assume the first element of splited array as a longest word
    *  run loop
    *  check lengths
    *  check result and return longest word
 */

// function
function myFunc(val) {
    // split
    let str = val.split(' ')

    // longest word
    let longest = str[0]

    // loop 
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i]
        }
    }

    // return value
    return longest;
}

// 
const str = 'I love javascript';

myFunc(str)
