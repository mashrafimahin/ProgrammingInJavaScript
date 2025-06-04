// Write a function that takes an array and a target value, and returns how many times that value appears.

function checkNumber(arr , value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}


//console it
let test = [1,2,3,4,5,6,7,8,9,2,2];
let val = 2;
console.log(checkNumber(test , val));
//output : 3