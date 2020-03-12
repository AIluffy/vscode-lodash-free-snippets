test('difference', () => {
    expect([[1, 2, 3, 4, 5], [5, 2, 10]].reduce((a, b) => a.filter(c => !b.includes(c)))).toEqual([1, 3, 4]);
});