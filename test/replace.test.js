test('replace', () => {
    var re = /apples/gi;
    var str = 'Apples are round, and apples are juicy.';
    expect(str.replace(re, 'oranges')).toBe('oranges are round, and oranges are juicy.');
});