test('every', () => {
    function isLargerThanTen (element, index, array) {
        return element >= 10
    }

    expect([10, 20, 30].every(isLargerThanTen)).toBeTruthy();
});