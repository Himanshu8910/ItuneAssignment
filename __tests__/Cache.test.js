import {
    createCache,
    addSearchResultsToCache,
    getSearchResultsFromCache,
} from '../src/NetworkApi/Cache';

test('create with size 10', () => {
    const cache = createCache(10);

    // __cache_size is an internal const and should never be changed
    expect(cache.__cache_size).toBe(10);
});

describe('adding to cache', () => {
    let mockData;
    beforeEach(() => {
        mockData = [
            {
                searchQuery: 'abc',
                results: [1, 2, 3],
            },
            {
                searchQuery: 'def',
                results: [1, 2, 3],
            },
            {
                searchQuery: 'ghi',
                results: [1, 2, 3],
            },
        ];
    });

    test('with space', () => {
        const cache = {
            __cache_size: mockData.length + 5,
            data: mockData,
        };

        const searchQuery = 'testing_123';
        const results = [123, 234, 345];
        addSearchResultsToCache(searchQuery, results, cache);

        const cachedResults = getSearchResultsFromCache(searchQuery, cache);
        expect(cachedResults).toBe(results);
    });

    test('without space', () => {
        const cache = {
            __cache_size: mockData.length,
            data: mockData,
        };
        const poppedData = mockData[0];

        const searchQuery = 'testing_345';
        const results = [123, 234, 345];
        addSearchResultsToCache(searchQuery, results, cache);

        const cachedResults = getSearchResultsFromCache(searchQuery, cache);
        expect(cachedResults).toBe(results);

        console.log(cache.data);
        const poppedResults = getSearchResultsFromCache(
            poppedData.searchQuery,
            cache,
        );
        expect(poppedResults).toBe(undefined);
    });
});
