test('endsWith', () => {
    expect('abc'.endsWith('b', 2)).toBeTruthy();
    expect('abc'.endsWith('c')).toBeTruthy();
    expect('abc'.endsWith('b')).not.toBeTruthy();
});