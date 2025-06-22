function myFun(data) {
    // assume that 10 is the most largest number 
    let large = data[0];
    // run a loop and go each element of the array and find number
    for (let i = 0; i < data.length; i++) {
        // set a condition for find the first largest number first
        // if you find the largest number then add a logical not oparator top false the condition and get the second largest number as well
        if (!large < data[i]) {
            large = data[i];
        }
    }
    // return the final output
    return large;
}
// console function
console.log(myFun([10,5,8,20,12]));
// Output: 12