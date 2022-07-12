const Intern = require('../lib/Intern')

test('create Intern object', () => {
    const int = new Intern('John', '234234', 'jon@test.com', 'UMN');

    expect(int.name).toEqual('John');
    expect(int.email).toEqual('jon@test.com');
    expect(int.id).toEqual('234234');
    expect(int.school).toEqual('UMN');
})

test('get employee role', () => {
    const int = new Intern('asda', 'adsdasd', 'asdasdad', 'asdasdasda');

    expect(int.getRole()).toEqual('Intern');
})


test('test employee methods', () => {
    const int = new Intern('John', '234234', 'jon@test.com', 'UMN');

    expect(int.getName()).toEqual('John');
    expect(int.getEmail()).toEqual('jon@test.com');
    expect(int.getId()).toEqual('234234');
    expect(int.getSchool()).toEqual('UMN')
})