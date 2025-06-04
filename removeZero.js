// Write a function that takes an array of numbers and returns a new array without any 0s.

function removeZero(data) {
    let final = []; // take an empty array
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== 0) {
            final.push(data[i]);
        }
    }
    return final;
}


//console it
console.log(removeZero([23,0,86,45,0,76,0,26]));
//output : [23,86,45,76,26]