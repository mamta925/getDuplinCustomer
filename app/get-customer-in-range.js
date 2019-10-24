let distance = require('get-user-within-range').distance; // published by mamta
const DUBLIN_GEO = require('./config/config').DUBLIN_GEO;

module.exports = getCustomerInRange = function (customerList) {
    let customerWithinRange = [];
    for (let index = 0; index < customerList.length; index++) {
        let customer = JSON.parse(customerList[index]);
        let customerDistanceFromDublin = distance(DUBLIN_GEO.latitude, DUBLIN_GEO.longitude, customer.latitude, customer.longitude);
        if (customerDistanceFromDublin <= DUBLIN_GEO.range) {
            customerWithinRange.push({user_id: customer.user_id, name: customer.name});
        }
    }
    return customerWithinRange;
};