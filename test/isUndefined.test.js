test('isUndefined', () => {
    const isUndefined = (value) => typeof value === 'undefined';

    expect(isUndefined(undefined)).not.toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();
});