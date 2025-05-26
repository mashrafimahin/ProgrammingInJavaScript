// Problem: Check for Palindrome words
// If you input any text or string in the console.log then if it is a palindrome word, it will print true otherwise print false. Now solve it.

// Solution 
function checkPalindrome(text){
    // convert it into lower case text
    text = text.toLowerCase();
    // conver text into a palindrome word
    let pal = text.toLowerCase().split('').reverse().join('');
    // return the value
    return text === pal;
}
// Print
console.log(checkPalindrome("madam"));
//Output: "true";
console.log(checkPalindrome("Mahin"));
//Output: "false";