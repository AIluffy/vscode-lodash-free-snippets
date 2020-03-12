test('unqi', () => {

    expect([...new Set([1, 2, 1, 4, 1, 3])]).toEqual([1, 2, 4, 3]);
});