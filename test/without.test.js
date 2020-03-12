test('without', () => {
    expect([1, 2, 3].filter(v => v !== 2)).toEqual([1, 3]);
});