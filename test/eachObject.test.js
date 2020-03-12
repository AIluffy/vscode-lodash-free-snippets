test('eachArray', () => {
    Object.entries({ 'one': 1, 'two': 2, 'three': 3 }).forEach(([key, value], index) => {

        if (index === 0) {
            expect(key).toBe('one')
        }

        if (index === 1) {
            expect(key).toBe('two');
        }

        if (index === 2) {
            expect(key).toBe('three')
        }
    });
});