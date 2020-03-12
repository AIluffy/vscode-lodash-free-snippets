test('filter', () => {
    function isBigEnough (value) {
        return value >= 10
    }
    var array = [12, 5, 8, 130, 44]
    expect(array.filter(isBigEnough)).toEqual([12, 130, 44]);
});