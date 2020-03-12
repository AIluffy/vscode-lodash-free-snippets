test('compact', () => {
    expect([0, 1, false, 2, '', 3].filter(Boolean)).toEqual([1, 2, 3]);
})