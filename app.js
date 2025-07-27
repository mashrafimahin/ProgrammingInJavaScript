/**
 *  Title: Custom Filter Function Using Callback Logic
 * 
 *  Condition: Keep values where (value % 2 === index)
 * 
 *  Created: July 27, 2025
 *  Author: Mahin
 */



// Main Code

//* take an array
const numbers = [10, 45, 33, 38, 90, 29, 50];
//* conditional function
const condition = function (value , i) {
    return value % 2  === i;
}
//* main function
const result = function (arr , fun) {
    // store data
    let myArr = [];
    // loop
    for (let i = 0; i < arr.length; i++) {
        // run condition
        if (fun(arr[i] , i)) {
            myArr.push(arr[i]);
        }
    }
    // return the array
    return myArr;
}
//* Call the result function
console.log(result(numbers , condition));







