/*
 ! Problem: Check for palindrome

 ? Proccess:
    *  take empty variable
    *  add checkpoint
    *  reverse the current value
    *  match both values and return
 */

// function
function myFunc(str) {
    // empty variable
    let value = str;
    // checkpoint
    if (typeof value !== 'string') {
        value = str.toString()
    }
    // reverse text
    let reversed = value.split('').reverse().join('');
    // match
    return value === reversed;
}

// print the values
myFunc(122)