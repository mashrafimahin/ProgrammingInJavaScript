// Problem: Reverse String
// If you input any text or string in the console.log then it will display the reversed form of you inputed text or string. Now solve it.

// Solution 
function string(text){
    //output will be printed in lower case
    let output = text.toLowerCase().split('').reverse().join('');
    //toLowerCase() => convert text into lower case
    //split('') => split every letter from the word
    //reverse() => reverse the splited letters
    //join('') => join every letters and convert in into a reversed word
    return output;
}
// Print
console.log(string("Hello"));
//Output: "olleh";
console.log(string("Running"));
//Output: "gninnur";