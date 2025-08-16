/*
 ! Problem : Two Sum 
 
 ? Proccess : 
    * use empty Object
    * loop
    * check numbers already exists inside object. If not then add them
*/

// main function
function twoSum(arr, target) {
    // empty array
    let myObj = {};
    // run loop
    for (let i = 0; i < arr.length; i++) {
        let component = target - arr[i];
        // check  if the componetnts already exists or not
        if (myObj[component] !== undefined) {
            return [myObj[component] , i];
        }
        // if not exists then add them in the object with index
        myObj[arr[i]] = i;
    }
}

// add values to the function
const numbers = [2,3,5,8];
const target = 5;
twoSum(numbers , target)