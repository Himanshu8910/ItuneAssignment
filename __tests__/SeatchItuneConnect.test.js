import { fetchResults } from '../src/NetworkApi/SearchItuneConnect';

test('no results without term', async () => {
    const results = await fetchResults();
    expect(results).toBe(null);
});

test('results with term', async () => {
    const results = await fetchResults('Adele');
    expect(results).not.toBe(null);
});
