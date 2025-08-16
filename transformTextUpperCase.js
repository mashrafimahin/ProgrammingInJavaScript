/*
 ! Problem: Transform Text into Upper Case.

 ? Proccess:
    * take empty variable
    * split inputed value
    * run loop and store data to empty variable with upper case
    * return
*/


// main function
function myFunc(str) {
    // empty variable
    let nothing = '';

    // split the inputed value
    let splited = str.split('')

    // transform into upper case
    for (let i = 0; i < splited.length; i++) {
        nothing += splited[i].toUpperCase()
    }

    // return 
    return nothing;
}

// print values
const str = 'i love javascript';

myFunc(str)