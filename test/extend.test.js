test('extend', () => {
    function Foo () {
        this.c = 3;
    }
    function Bar () {
        this.e = 5;
    }
    Foo.prototype.d = 4;
    Bar.prototype.f = 6;

    const extend = (target, ...sources) => {
        const length = sources.length;
        if (length < 1 || target == null) return target;
        for (let i = 0; i < length; i++) {
            const source = sources[i];
            for (const key in source) {
                target[key] = source[key];
            }
        };
        return target;
    };

    expect(extend({}, new Foo, new Bar)).toEqual({ 'c': 3, 'd': 4, 'e': 5, 'f': 6 });
});