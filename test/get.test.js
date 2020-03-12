test('get', () => {
    const get = (obj, path, defaultValue) => {
        const travel = regexp =>
            String.prototype.split
                .call(path, regexp)
                .filter(Boolean)
                .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
        const result = travel(/[,[]]+?/) || travel(/[,[].]+?/);
        return result === undefined || result === obj ? defaultValue : result;
    };

    var object = { a: [{ b: { c: 3 } }] };

    expect(get(object, 'a[0].b.c', 1));
});