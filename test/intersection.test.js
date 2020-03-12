test('intersection', () => {
    expect([[1, 2, 3], [101, 2, 1, 10], [2, 1]].reduce((a, b) => a.filter(c => b.includes(c)))).toEqual([1, 2]);
});