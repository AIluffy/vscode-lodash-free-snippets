test('clamp', () => {
    const clamp = (number, boundOne, boundTwo) => {
        if (!boundTwo) {
            return Math.max(number, boundOne) === boundOne ? number : boundOne;
        } else if (Math.min(number, boundOne) === number) {
            return boundOne;
        } else if (Math.max(number, boundTwo) === number) {
            return boundTwo;
        }

        return number;
    };

    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(10, -5)).toBe(-5);
    expect(clamp(10, 99)).toBe(10);
})