function myFun(data) {
    // make this string into pieces
    let words = data.split(' ');
    // take an empty string
    let final = '';
    // take a random counter for get space after each word
    let count = 0;
    // take an for of loop for define each word
    for (let word of words) {
        // Capitalize every word first
        final += word.charAt(0).toUpperCase() + word.slice(1);
        // incease counter every time
        count++;
        // give a space after every word
        if (count < words.length) {
            final += ' ';
        }
    }
    // return the value
    return final;
}
// console function
console.log(myFun("i love javascript"));
// Output: I Love Javascript