test('isInteger', () => {
    expect(Number.isInteger(3)).not.toBeFalsy();
    expect(Number.isInteger('3')).toBeFalsy();
});