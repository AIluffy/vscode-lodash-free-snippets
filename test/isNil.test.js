test('isNil', () => {
    const isNil = (value) => value == null;

    expect(isNil(null)).not.toBeFalsy();
    expect(isNil(undefined)).not.toBeFalsy();
    expect(isNil(NaN)).toBeFalsy();
});