test('reduceRight', () => {
    var array = [0, 1, 2, 3, 4]
    var result = array.reduceRight(function (previousValue, currentValue, currentIndex, array) {
        return previousValue - currentValue
    })
    expect(result).toBe(-2);
});