test('takeRight', () => {
    expect([1, 2, 3].slice(-1)).toEqual([3]);
    expect([1, 2, 3].slice(-2)).toEqual([2, 3]);
    expect([1, 2, 3].slice(-5)).toEqual([1, 2, 3]);
    expect([1, 2, 3].slice(-0)).toEqual([1, 2, 3]);
});