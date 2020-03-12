test('toPairs', () => {
    expect(Object.entries({ one: 1, two: 2, three: 3 })).toEqual([["one", 1], ["two", 2], ["three", 3]]);
});