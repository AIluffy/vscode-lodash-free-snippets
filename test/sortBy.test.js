test('sortBy', () => {
    const fruits = [
        { name: "banana", amount: 2 },
        { name: "apple", amount: 4 },
        { name: "pineapple", amount: 2 },
        { name: "mango", amount: 1 }
    ];

    const sortBy = (key) => {
        return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
    };

    expect([...fruits].sort(sortBy('name'))).toEqual([{ name: "apple", amount: 4 }, { name: "banana", amount: 2 }, { name: "mango", amount: 1 }, { name: "pineapple", amount: 2 }]);
});