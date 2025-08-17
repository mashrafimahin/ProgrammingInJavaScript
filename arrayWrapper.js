/*
 ! Problem: Arraw Wrapper Problem

 ? Proccess:
    *  take empty variable
    *  add checkpoint for each data
    *  create dynamic data inside object
    *  add items to the data inside object and return
 */

// data
const data = [
   {
      name: 'Alice',
      age : 21
   },
   {
      name: 'Bob',
      age : 17
   },
   {
      name: 'Charlie',
      age : 21
   }
]


// function
function myFunc(value) {

   // empty object
   let myObj = {}

   // check for each data object
   value.forEach(item => {

      // check first condition
      if (!myObj[item.age]) {
         myObj[item.age] = []
      }
      
      myObj[item.age].push(item.name)

   });

   // return the main object
   return myObj
}

myFunc(data)