test('fromPairs', () => {
    const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {});

    expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ 'a': 1, 'b': 2 });
});