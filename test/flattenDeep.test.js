test('flattenDeep', () => {
    const flattenDeep = (arr) => Array.isArray(arr)
        ? arr.reduce((a, b) => a.concat(flattenDeep(b)), [])
        : [arr];

    expect(flattenDeep([1, [[2], [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
});