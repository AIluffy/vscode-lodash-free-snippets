const chunk = (array = [], size = 0) =>
    array.reduce((arr, item, idx) => {
        return idx % size === 0
            ? [...arr, [item]]
            : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);

test('chunk', () => {
    const arr = ['a', 'b', 'c', 'd'];

    expect(chunk(arr, 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(arr, 3)).toEqual([['a', 'b', 'c'], ['d']]);
})