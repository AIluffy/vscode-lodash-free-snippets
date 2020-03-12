test('random', () => {
    const random = (a = 1, b = 0) => {
        const lower = Math.min(a, b);
        const upper = Math.max(a, b);
        return lower + Math.random() * (upper - lower);
    };

    expect(random()).toBeGreaterThanOrEqual(0);
    expect(random()).toBeLessThanOrEqual(1);
    expect(random(5)).toBeGreaterThanOrEqual(0);
    expect(random(5)).toBeLessThanOrEqual(5);
    expect(random(0, 5)).toBeGreaterThanOrEqual(0);
    expect(random(0, 5)).toBeLessThanOrEqual(5);
    expect(random(1.2, 5.2)).toBeGreaterThanOrEqual(1.2);
    expect(random(1.2, 5.2)).toBeLessThanOrEqual(5.2);
})
