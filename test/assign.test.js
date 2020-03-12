test('assign', () => {
    function Foo () {
        this.c = 3;
    }
    function Bar () {
        this.e = 5;
    }
    Foo.prototype.d = 4;
    Bar.prototype.f = 6;

    expect(Object.assign({}, new Foo, new Bar)).toEqual({ 'c': 3, 'e': 5 });
})