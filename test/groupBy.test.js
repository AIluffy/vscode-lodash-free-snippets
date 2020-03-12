test('groupBy', () => {
    const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {});

    expect(['one', 'two', 'three'].reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})).toMatchObject({ 3: ["one", "two"], 5: ["three"] });
});