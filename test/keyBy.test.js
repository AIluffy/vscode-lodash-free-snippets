test('keyBy', () => {
    const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});

    const collectionKeyBy = (collection, key) => {
        const c = collection || {};
        return Array.isArray(c) ? keyBy(c, key) : keyBy(Object.values(c), key);
    };

    expect(keyBy(['a', 'b', 'c'])).toMatchObject({ a: 'a', b: 'b', c: 'c' });
    expect(keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id')).toMatchObject({ a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } });
    expect(keyBy(Object.values({ data: { id: 'a1', title: 'abc' } }), 'id')).toMatchObject({ a1: { id: 'a1', title: 'abc' } });
    expect(collectionKeyBy({ data: { id: 'a1', title: 'abc' } }, 'id')).toMatchObject({ a1: { id: 'a1', title: 'abc' } });
});