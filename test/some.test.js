test('some', () => {
    function isLargerThanTen (element, index, array) {
        return element >= 10
    }

    expect([10, 9, 8].some(isLargerThanTen)).toBeTruthy;
});