# acme-customer-tracker

install nodemon
npm install
npm test


Assignment: 

const sales = [{
    customerID : 1,
    orderID : 1,
    total : 3
}, 
{customerID : 2, 
orderID: 2, 
total: 4}
}]

They also have data for their customers

const customers = [
    {ID : 1,
    name: 'Moe'},
    {ID : 2,
    name : 'Larry}
]

Direction: write a function with the following signature

function generateCustomerSalesMap(salesData, customerData){}
which will return an object where the keys are the customer names and
the values are the total sales for that customer

example return result : {
    moe : 55,
    larry : 33,
    carly : 0
}
use mocha, chai for some test!!
*/
