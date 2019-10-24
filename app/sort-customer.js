module.exports = sortCustomer = function (customers) {
    customers.sort(function (customer1, customer2) {
        if (customer1.user_id < customer2.user_id) {
            return -1;
        }
        if (customer1.user_id > customer2.user_id) {
            return 1;
        }
        return 0;
    });
    return customers;
};