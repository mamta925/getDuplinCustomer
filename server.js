let fs = require('fs');
let getCustomerInRange = require('./app/get-customer-in-range.js');

//read customer data from txt file
let customerData = fs.readFileSync('./customerData/Customers _Assignment_Coding Challenge.txt', 'utf-8');
let customerList = customerData.toString().split('\r\n');
let customerWithinRange = getCustomerInRange(customerList);
//the names and user ids of matching customers (within 100km), sorted by User ID (ascending).
console.log("********customer names and user id within 100 km  sorted by user ID************");
console.log("\n");
console.log(customerWithinRange);
console.log("\n");
console.log(customerWithinRange.length + " customers will come. Congo!!!!");
console.log("********@@@@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&THANKS&&&&&&&&&&&@@@@@@@@@@************");



