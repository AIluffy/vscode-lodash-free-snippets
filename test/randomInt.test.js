test('randomInt', () => {
    const randomInt = (a = 1, b = 0) => {
        const lower = Math.ceil(Math.min(a, b));
        const upper = Math.floor(Math.max(a, b));
        return Math.floor(lower + Math.random() * (upper - lower + 1))
    };

    expect(randomInt()).toBeGreaterThanOrEqual(0);
    expect(randomInt()).toBeLessThanOrEqual(1);
    expect(randomInt(5)).toBeGreaterThanOrEqual(0);
    expect(randomInt(5)).toBeLessThanOrEqual(5);
    expect(randomInt(0, 5)).toBeGreaterThanOrEqual(0);
    expect(randomInt(0, 5)).toBeLessThanOrEqual(5);
    expect(randomInt(1.2, 5.2)).toBeGreaterThanOrEqual(2);
    expect(randomInt(1.2, 5.2)).toBeLessThanOrEqual(5);
})
