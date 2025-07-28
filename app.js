/**
 *  Detect the Smallest Repeating Substring Pattern
 *
 *  Description:
 *      You're given a non-empty string `s`. Your task is to determine whether the
 *      string can be formed by repeating a substring multiple times.
 *
 *  Real-Life Analogy:
 *      Think of checking if a chorus (repeated line) has been used to form the entire
 *      song track. Your job is to detect that pattern.
 *
 *  Examples:
 *      - "abab" → true
 *      - "abcabcabc" → true
 *      - "xyzxyz" → true
 *      - "abcd" → false
 *
 *  Constraints:
 *      - 1 ≤ s.length ≤ 1000
 */


// ! Solution !


// make a string 
const myString = 'xyzxyz';

// function
function myFunction(value) {
    // divide the value length from middle
    let dividedValue = (value.length) / 2;

    // run loop 
    for (let i = 1; i <= dividedValue; i++) {

        // check condition
        if (value.length % i === 0) {

            // slice the text to take exact string
            let sliced = value.slice(0, i);

            // repeat the sliced part
            let repeated = sliced.repeat(value.length / i);

            // check condition
            if (repeated === value) {
                return sliced;
            }
        }
    }

    // else condition cosidered
    return 'Not Found';
}

// call the function
console.log(myFunction(myString));
// output: xyz