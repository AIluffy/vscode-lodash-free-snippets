test('padEnd', () => {

    expect('123'.padEnd(5, '0')).toEqual('12300');
});