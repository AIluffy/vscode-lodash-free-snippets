test('inRange', () => {
    const inRange = (num, a, b = 0) => (Math.min(a, b) <= num && num < Math.max(a, b));

    expect(inRange(3, 2, 4)).toBeTruthy();
    expect(inRange(-3, -2, -6)).toBeTruthy();

});