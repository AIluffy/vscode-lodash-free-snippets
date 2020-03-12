test('pickBy', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    function pickBy (object) {
        const obj = {};
        for (const key in object) {
            if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
                obj[key] = object[key];
            }
        };
        return obj;
    };

    expect(pickBy(object)).toMatchObject({ a: 1, c: 3 });
});