// Write a function that takes an array of numbers and returns how many even numbers are in the array.

function checkEven(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(checkEven([2,3,5,4,6]));
// output: 3