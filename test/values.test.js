test('values', () => {
    expect(Object.values({ one: 1, two: 2, three: 3 })).toEqual([1, 2, 3]);
});