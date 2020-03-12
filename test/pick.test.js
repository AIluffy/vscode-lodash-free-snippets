test('pick', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    const { a, c } = object;
    const result = { a, c };

    expect(result).toMatchObject({ a: 1, c: 3 });
});