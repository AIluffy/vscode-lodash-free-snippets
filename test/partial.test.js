test('partial', () => {
    const partial = (func, ...boundArgs) => (...remainingArgs) => func(...boundArgs, ...remainingArgs);

    function greet (greeting, name) {
        return greeting + ' ' + name;
    }

    var sayHelloTo = partial(greet, 'Hello');
    var result = sayHelloTo('Jose')

    expect(result).toEqual('Hello Jose');
});