test('isArray', () => {
    expect(Array.isArray([])).toBeTruthy();
    expect(Array.isArray(1)).toBeFalsy();
});