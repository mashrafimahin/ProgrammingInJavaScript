// Write a function that takes an array of numbers and returns the sum of all the numbers.
function sum(data) {
    let result = 0; // take a variable for store the final result
    for (let i = 0; i < data.length; i++) {
        result += data[i];
    }
    return result;
}
console.log(sum([1,2,3,4]));
// output: 10