test('map', () => {
    const array = [1, 2, 3];
    expect(array.map((item, index) => { return item * 2 })).toEqual([2, 4, 6]);
});