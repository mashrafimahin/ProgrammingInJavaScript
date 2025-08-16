/*
 ! Problem: Find the second largest number from array

 ? Proccess:
    * Take variables and assume the fisrt item of the element is the largest number
    * Run Loop 
    * Check and find the first largest number first
    * Then check the second largest number
    * Replace the value in second variable and print
 */

// main function
function myFunc(value) {
    // assumption
    let largest = value[0];
    let secondLargest = 0;

    // loop
    for (let i = 0; i < value.length; i++) {
        // checkpoint
        if (largest < value[i]) {
            secondLargest = largest;
            largest = value[i];
            
            // check one more time
            if (value[i] < largest && value[i] > secondLargest) {
                secondLargest = value[i]
            }
        }
    }
    // return 
    return secondLargest;
}

// put the values inside the function
const numbers = [5,8,3,12];
myFunc(numbers)