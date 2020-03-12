test('isEmpty', () => {
    const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

    expect(isEmpty(null)).not.toBeFalsy();
    expect(isEmpty('')).not.toBeFalsy();
    expect(isEmpty({})).not.toBeFalsy();
    expect(isEmpty([])).not.toBeFalsy();
    expect(isEmpty({ a: '1' })).toBeFalsy();

});