function myFun(data) {
    // take a object for final output
    let result = {
        Even : 0,
        Odd : 0,
    };
    // take an loop for go through each items of the array
    for (let i = 0; i < data.length; i++) {
        // if number is even data ++ Or odd data ++
        if (data[i] % 2 === 0) {
            result.Even++;
        } else {
            result.Odd++;
        }
    }
    // return the final value
    return result;
}
// console function
console.log(myFun([1,2,3,4,5,6]));
// Output: { Even: 3 , Odd; 3 }