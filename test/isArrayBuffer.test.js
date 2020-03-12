test('isArrayBuffer', () => {
    expect(new ArrayBuffer(2) instanceof ArrayBuffer).toBeTruthy();
    expect(1 instanceof ArrayBuffer).toBeFalsy();
});