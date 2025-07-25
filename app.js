

// Two Sum Problem Solving 

const twoSum = function(numbers , target) {
    // empty array 
    let myArr = [];
    // run loop
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                myArr.push(i, j);
            }
        }
    }
    // return value
    return myArr;

}

// number & target
const numbers = [2,7,11,15];
const target = 26;
// print the function 
const print = twoSum(numbers, target);
// console
console.log(print);





