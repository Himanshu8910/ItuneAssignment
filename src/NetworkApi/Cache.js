const CACHE_SIZE = '__cache_size';

export const createCache = size => ({
    [CACHE_SIZE]: size,
    data: [],
});

const isCacheFull = cache => cache.data.length >= cache[CACHE_SIZE];

const popCache = cache => {
    return cache.data.slice(1);
};

// adding data to the cache
export const addSearchResultsToCache = (searchQuery, results, cache) => {
    if (isCacheFull(cache)) {
        cache.data = popCache(cache);
    }

    cache.data.push({
        searchQuery,
        results,
    });
};

//  search and retrieve data from the cache
export const getSearchResultsFromCache = (searchQuery, cache) => {
    const data = cache.data.find(obj => obj.searchQuery === searchQuery);
    return data?.results;
};
