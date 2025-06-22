function myFun(data) {
    // make string to a array by using split function
    let str = data.split(' ');
    // take an empty string for add result
    let result = '';
    // run  a loop for identify each part of the array
    for (let i = 0; i < str.length; i++) {
        // reverse each text
        result += str[i].split('').reverse().join('');
        // add a space and if the condition id false give no space
        if (i < str.length - 1) {
            result += ' ';
        }
    }
    // return the final result
    return result;
}
//console the function
console.log(myFun("I Love Javascript"));
// Output: I evoL tpircsavaJ