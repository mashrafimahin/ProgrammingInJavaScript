/*
 ! Problem: Count vowels in a string.

 ? Proccess:
    * take empty counter & vowel pattern
    * checkpoint (optional)
    * split the input value
    * run loop and match with vowel pattern
    * return
*/


// main function
function myFunc(str) {
    // empty counter 
    let count = 0;
    
    // vowels pattern
    const vowelPattern = ['a','e','i','o','u'];

    // checkpoint
    if (typeof str !== 'string') {
        throw new Error('you added wrong type of value')
    }

    // split the full string
    let splited = str.split('');

    // check vowels
    for (let i = 0; i < splited.length; i++) {
        if (vowelPattern.includes(splited[i])) {
            count++
        }
    }

    // return 
    return count;
}

// print values
const str = 'javascript';

myFunc(str)