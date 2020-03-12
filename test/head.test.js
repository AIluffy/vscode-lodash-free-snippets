test('head', () => {
    const [head, ...tail] = [1, 2, 3];

    expect(head).toEqual(1);
});