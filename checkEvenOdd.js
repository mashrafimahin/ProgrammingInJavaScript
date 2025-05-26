
// even or odd identifier function
function checkNumber(value){
    let result;
    if (value % 2 === 0) {
        result = "This is even.";
    } else {
        result = "This is odd.";
    }
    return result;
}
// print
console.log(checkNumber(5));
// output: "This is odd";
console.log(checkNumber(8));
// output: "This is even";