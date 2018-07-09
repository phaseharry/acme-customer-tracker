function generateCustomerSalesMap(salesData, customerData) {
  return customerData.reduce(function(obj, customer) {
    let total = 0;
    for (let i = 0; i < salesData.length; i++) {
      if (salesData[i].customerID === customer.ID) {
        total += salesData[i].total;
      }
    }
    let name = customer.name;
    obj[name] = total;
    return obj;
  }, {});
}
/*
Line 2: The initial reduce function loops through the customer data.
Line 4 - 8: Loops through the sales data looking for IDs on sales that match the current customer's ID.
If it matches, then it is increated to the total variable declared in line 3.
Line 9 - 14: Assigns customer name to the object as the key with the value being the total sales made by that customer
Line 11: Object is returned to be the accum value for the next customer, if any.
*/

module.exports = generateCustomerSalesMap;
