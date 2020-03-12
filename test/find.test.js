test('find', () => {
    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
    ]

    expect(users.find((o) => { return o.age < 40; })).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
});