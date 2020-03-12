test('omit', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    const { a, c, ...result } = object;

    expect(result).toMatchObject({ 'b': '2' });
});