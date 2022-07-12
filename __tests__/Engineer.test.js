const Engineer = require('../lib/Engineer')

test('create Engineer object', () => {
    const eng = new Engineer('John', '234234', 'jon@test.com', 'https://github.com/John');

    expect(eng.name).toEqual('John');
    expect(eng.email).toEqual('jon@test.com');
    expect(eng.id).toEqual('234234');
    expect(eng.github).toEqual('https://github.com/John');
})

test('get employee role', () => {
    const eng = new Engineer('asda', 'adsdasd', 'asdasdad', 'asdasdasda');

    expect(eng.getRole()).toEqual('Engineer');
})


test('test employee methods', () => {
    const eng = new Engineer('John', '234234', 'jon@test.com', 'https://github.com/John');

    expect(eng.getName()).toEqual('John');
    expect(eng.getEmail()).toEqual('jon@test.com');
    expect(eng.getId()).toEqual('234234');
    expect(eng.getGithub()).toEqual('https://github.com/John')
})