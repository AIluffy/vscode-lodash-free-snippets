test('padStart', () => {

    expect('123'.padStart(5, '0')).toEqual('00123');
});