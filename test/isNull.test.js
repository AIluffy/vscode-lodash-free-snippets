test('isNull', () => {
    const isNull = (value) => value === null;

    expect(isNull(null)).not.toBeFalsy();
    expect(isNull(undefined)).toBeFalsy();

    expect(isNull(NaN)).toBeFalsy();
});