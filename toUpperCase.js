// Write a function that takes an array containing both numbers and strings, and returns a new array with only the numbers.

function capitalizeText(value) {
    const myArr = [];
    for (let i = 0; i < value.length; i++) {
        myArr.push(value[i].charAt(0).toUpperCase() + value[i].slice(1));
    }
    return myArr;
}

//console it
let test = ["hello" , "mahin"];
console.log(capitalizeText(test));
//output : ["Hello" , "Mahin"]