let distance = require('get-user-within-range').distance; // published by mamta
let dublinGeo = require('./config/config').dublinGeo;

module.exports = getCustomerInRange = function (customerList) {
    let customerWithinRange = [];
    for (let index = 0; index < customerList.length; index++) {
        let customer = JSON.parse(customerList[index]);
        let customerDistanceFromDublin = distance(dublinGeo.latitude, dublinGeo.longitude, customer.latitude, customer.longitude);
        if (customerDistanceFromDublin <= dublinGeo.range) {
            customerWithinRange.push({user_id: customer.user_id, name: customer.name});
        }
    }
    return customerWithinRange;
};