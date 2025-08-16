/*
 ! Problem: Check sum of Numbers.

 ? Proccess:
    *  take empty variable
    *  add checkpoint
    *  reverse the current value
    *  match both values and return
 */

// function
function myFunc(num) {
    // empty variable
    let result = 0;

    // make the number to string
    let str = num.toString()

    // split the string
    let splited = str.split('')

    // split the inputed item
    for (let i = 0; i < splited.length; i++){
        result += Number(splited[i])
    }

    // return
    return result;
}

// print the values
const num = 1234;

myFunc(num)