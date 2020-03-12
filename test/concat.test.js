test('concat', () => {
    expect([1].concat(2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
});