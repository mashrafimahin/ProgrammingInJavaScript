// Problem: Count vowels in a string
// If you input any text or string in the console.log then it will display the number of vowels that are included in the words of your inputted text or string. Now solve it.

// Solution 
function countVowels(count){
    let counter = 0;
    // Nest all vowels in a array 
    const vowels = ["a","e","i","o","u"];
    // run a loop for find the length of the text
    for (let i = 0; i < count.length; i++){
        // if inputted text have any vowels then it will run othwerwise not
        if (vowels.includes(count[i].toLowerCase())){
            counter++;
        }
    }
    return counter;
}
// adding extra text
const add = "vowels founded.";
// Print
console.log(countVowels("Five") + " " + add);
//Output: "2";
console.log(countVowels("Mahinix") + " " + add);
//Output: "3";