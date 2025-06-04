// Write a function that takes an array of numbers and returns the largest number.
function findMax(num) {
    let max = num[0];  // assume the first element of the array is maximum number
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5]));
// output: 5