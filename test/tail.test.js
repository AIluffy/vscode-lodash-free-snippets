test('tail', () => {
    const [head, ...tail] = [1, 2, 3];

    expect(tail).toEqual([2, 3]);
});