// Write a function that takes an array and returns a new array with the elements in reverse order.

function reversed(arr) {
    let reverseArr = [];

    for (let i = arr.length - 1; i >= 0 ; i--) {
        reverseArr.push(arr[i]);
    }

    return reverseArr;
}

//console it
console.log(reversed(["n","i","h","a","m"]));
//output : ["m","a","h","i","n"]