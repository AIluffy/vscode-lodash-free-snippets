test('isFinite', () => {
    expect(Number.isFinite(3)).not.toBeFalsy();
    expect(Number.isFinite('3')).toBeFalsy();
});