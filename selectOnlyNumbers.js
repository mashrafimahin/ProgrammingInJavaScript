// Write a function that takes an array containing both numbers and strings, and returns a new array with only the numbers.

function onlyNumber(arr) {
    let final = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            final.push(arr[i]);
        }
    }
    return final;
}

//console it
let test = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
console.log(onlyNumber(test));
//output : 3