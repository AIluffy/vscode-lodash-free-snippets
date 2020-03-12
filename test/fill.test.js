test('fill', () => {
    expect([1, 2, 3].fill('a')).toEqual(['a', 'a', 'a']);
    expect(Array(3).fill(2)).toEqual([2, 2, 2]);
    expect([4, 6, 8, 10].fill('*', 1, 3)).toEqual([4, '*', '*', 10]);
});