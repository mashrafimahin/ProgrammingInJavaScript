function myFun(data) {
    let sum = 0;
    // take loop for add sum data
    for (let i = 0; i < data.length; i++) {
        // add data only when condition is true. Means number is positive
        if (data[i] > 0) {
            sum += data[i];
        }
    }
    // return sum
    return sum;
}
// console function
console.log(myFun([3,-1,5,-6,7]));
// Output: 15