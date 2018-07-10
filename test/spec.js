const expect = require(`chai`).expect;
const generateCustomerSalesMap = require(`../customers`);

describe('tracks total amount of customer orders', function() {
  it('exists', function() {
    expect(generateCustomerSalesMap).to.be.ok;
  });
  it('accepts empty arrays', function() {
    expect(generateCustomerSalesMap([], [])).to.eql({});
  });
  it('can accept no sales data', function() {
    const customers = [
      {
        ID: 1,
        name: 'Moe',
      },
      {
        ID: 2,
        name: 'Larry',
      },
    ];

    expect(generateCustomerSalesMap([], customers)).to.eql({
      Moe: 0,
      Larry: 0,
    });
  });
  it(`can track simple sales data`, function() {
    const sales = [
      {
        customerID: 1,
        orderID: 1,
        total: 3,
      },
      {
        customerID: 2,
        orderID: 2,
        total: 4,
      },
    ];
    const customers = [
      {
        ID: 1,
        name: 'Moe',
      },
      {
        ID: 2,
        name: 'Larry',
      },
    ];

    expect(generateCustomerSalesMap(sales, customers)).to.eql({
      Moe: 3,
      Larry: 4,
    });
  });
  it('does not put data in salesmap if ID does not match any ID in customer database', function() {
    const customers = [
      {
        ID: 1,
        name: 'Moe',
      },
      {
        ID: 2,
        name: 'Larry',
      },
    ];
    const sales = [
      {
        customerID: 1,
        orderID: 1,
        total: 3,
      },
      {
        customerID: 2,
        orderID: 2,
        total: 4,
      },
      {
        customerID: 3,
        orderID: 3,
        total: 203,
      },
    ];
    expect(generateCustomerSalesMap(sales, customers)).to.eql({
      Moe: 3,
      Larry: 4,
    });
  });
  it(`can track multiple orders from the same customer`, function() {
    const sales = [
      {
        customerID: 1,
        orderID: 1,
        total: 3,
      },
      {
        customerID: 2,
        orderID: 2,
        total: 4,
      },
      {
        customerID: 2,
        orderID: 2,
        total: 23,
      },
    ];
    const customers = [
      {
        ID: 1,
        name: 'Moe',
      },
      {
        ID: 2,
        name: 'Larry',
      },
    ];
    expect(generateCustomerSalesMap(sales, customers)).to.eql({
      Moe: 3,
      Larry: 27,
    });
  });
  it('can track a customer in the database even if no purchase was made', function() {
    const sales = [
      {
        customerID: 1,
        orderID: 1,
        total: 3,
      },
      {
        customerID: 2,
        orderID: 2,
        total: 4,
      },
      {
        customerID: 2,
        orderID: 2,
        total: 23,
      },
    ];
    const customers = [
      {
        ID: 1,
        name: 'Moe',
      },
      {
        ID: 2,
        name: 'Larry',
      },
      {
        ID: 3,
        name: 'Jay',
      },
    ];
    expect(generateCustomerSalesMap(sales, customers)).to.eql({
      Moe: 3,
      Larry: 27,
      Jay: 0,
    });
  });
});
