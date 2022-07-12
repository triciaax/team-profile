const Manager = require('../lib/Manager')

test('create Manager object', () => {
    const man = new Manager('John', '234234', 'jon@test.com', '23131');

    expect(man.name).toEqual('John');
    expect(man.email).toEqual('jon@test.com');
    expect(man.id).toEqual('234234');
    expect(man.officeNumber).toEqual('23131');
})

test('get employee role', () => {
    const man = new Manager('asda', 'adsdasd', 'asdasdad', 'asdasdasda');

    expect(man.getRole()).toEqual('Manager');
})


test('test employee methods', () => {
    const man = new Manager('John', '234234', 'jon@test.com', '23131');

    expect(man.getName()).toEqual('John');
    expect(man.getEmail()).toEqual('jon@test.com');
    expect(man.getId()).toEqual('234234');
    expect(man.getOfficeNumber()).toEqual('23131')
})