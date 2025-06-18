// Problem: 
// Guess I have a store and I give a offer. If someone buy products over 3000tk will get a 5% discount and if the price is over 6000tk will get 15% discount. Now write down code for this discount value and return the Full Price after discount. 
// Thinking (max 5 minutes)
// Answer:
function myFunction(value){
    // let a simple string that can help to return a beautiful output
    let back = "You'll get return: ";
    // let have a discount value
    let discount = 0;
    // let have a final calculation
    let result = 0;
    // if shopping price > 6000 = 15% discount
    if (value > 6000) {
        discount = value / 100 * 15;
        result = value - discount;
    }
    // if shopping price > 3000 = 5% discount
    else if (value > 3000) {
        discount = value / 100 * 5;
        result = value - discount;
    }
    // if shopping price < 3000 = no discount
    else {
        result = value;
    }
    // let a final output message for customer
    let reply = back + result;
    // return message
    return reply; 
}
// let guess a price for your product and have a discount
console.log(myFunction(4500));
// Final Result: 4275.