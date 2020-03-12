test('sample', () => {
    const array = [0, 1, 2, 3, 4]
    const sample = arr => {
        const len = arr == null ? 0 : arr.length;
        return len ? arr[Math.floor(Math.random() * len)] : undefined;
    };

    const result = sample(array)
    expect(result).toBeLessThan(5);
});