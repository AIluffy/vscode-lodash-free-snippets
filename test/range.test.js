test('range', () => {
    expect(Array.from({ length: 4 }, (_, i) => i)).toEqual([0, 1, 2, 3]);
    expect(Array.from({ length: 4 }, (_, i) => -i)).toEqual([-0, -1, -2, -3]);
});