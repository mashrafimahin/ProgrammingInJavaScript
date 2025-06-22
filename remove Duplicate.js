function myFun(data) {
    // take an empty array
    let newArr = [];
    // go for a loop which explre each number inside data array
    for (let i = 0; i < data.length; i++) {
        // give a  condition if newArr has not any items inside it then it will work
        // Reference for undestand : 
        // ! - not sign;
        // if (value is NOT already in the array) {
        //     add it
        // }        
        if (!newArr.includes(data[i])) {
            newArr.push(data[i]);
        }
    }
    // Rerturn array
    return newArr;
}
// console function
console.log(myFun([1,2,2,3,4,4,5]));
// Output: [1,2,3,4,5]