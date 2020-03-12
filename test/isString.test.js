test('isString', () => {
    function isString (str) {
        if (str && typeof str.valueOf() === 'string') {
            return true;
        }
        return false;
    };

    expect(isString('abc')).not.toBeFalsy();
    expect(isString(123)).toBeFalsy();
});