test('maxBy', () => {
    const maxBy = (collection, key) => {
        const select = (a, b) => a[key] >= b[key] ? a : b;
        return collection.reduce(select, {});
    };

    var data = [{ value: 6 }, { value: 2 }, { value: 4 }]

    expect(maxBy(data, 'value')).toMatchObject({ value: 6 });
});