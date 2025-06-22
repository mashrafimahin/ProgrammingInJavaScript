function myFun(data) {
    // convert the number into string and make it like an array by splitting
    let str = data.toString().split('');
    // taking a object for store my final output
    let result = {
        Even : 0,
        Odd : 0,
    };
    // make a for loop to exicute per details in the array
    for (let i = 0; i < str.length; i++) {
        // if number is even then store it in the Even key inside the array
        if (Number(str[i]) % 2 === 0) {
            result.Even = str[i];
        } 
        // if number is odd then store it in the Odd key inside the array
        else {
            result.Odd = str[i];
        }
    }
    // get output
    return result;
}
//console the function
console.log(myFun(52713));
// Output: { Even: 2 , Odd: 3 }

