test('upperFirst', () => {
    const upperFirst = (string) => {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    };

    expect(upperFirst('george')).toBe('George');
});