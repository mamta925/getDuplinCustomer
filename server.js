let fs = require('fs');
let getCustomerInRange = require('./app/get-customer-in-range.js');
let sortCustomer = require('./app/sort-customer.js');

//read customer data from txt file
let customerData = fs.readFileSync('./customerData/Customers _Assignment_Coding Challenge.txt', 'utf-8');
let customerList = customerData.toString().split('\r\n');
let customerWithinRange = getCustomerInRange(customerList);
let sortedCustomerList = sortCustomer(customerWithinRange);

//the names and user ids of matching customers (within 100km), sorted by User ID (ascending).

console.log(sortedCustomerList);
console.log("\n");
console.log(sortedCustomerList.length + " customers will come. Congo!!!!");

module.exports = {
    customerList : sortedCustomerList
};



