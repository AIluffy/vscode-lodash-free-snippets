test('eachArray', () => {
    [1, 2].forEach((value, index) => {
        if (index === 0) {
            expect(value).toBe(1);
        }

        if (index === 1) {
            expect(value).toBe(2);
        }
    })

});