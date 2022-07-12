const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('John', '234234', 'jon@test.com');

    expect(employee.name).toEqual('John');
    expect(employee.email).toEqual('jon@test.com');
    expect(employee.id).toEqual('234234');
})

test('get employee role', () => {
    const employee = new Employee('asda', 'adsdasd', 'asdasdad');

    expect(employee.getRole()).toEqual('Employee');
})


test('test employee methods', () => {
    const employee = new Employee('John', '234234', 'jon@test.com');

    expect(employee.getName()).toEqual('John');
    expect(employee.getEmail()).toEqual('jon@test.com');
    expect(employee.getId()).toEqual('234234');
})