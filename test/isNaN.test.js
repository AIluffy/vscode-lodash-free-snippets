test('isNaN', () => {
    expect(Number.isNaN(NaN)).not.toBeFalsy();
    expect(Number.isNaN(3)).toBeFalsy();
});