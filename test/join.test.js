test('join', () => {
    expect(['one', 'two', 'three'].join('--')).toEqual('one--two--three');
});