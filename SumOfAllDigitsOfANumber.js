


// Sum of all digits of a number

function getNumber(value) {
    let str = value.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}

console.log(getNumber(5273));