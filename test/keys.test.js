test('keys', () => {
    expect(Object.keys({ one: 1, two: 2, three: 3 })).toEqual(["one", "two", "three"]);
});