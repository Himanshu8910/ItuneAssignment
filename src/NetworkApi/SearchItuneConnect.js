import {
    createCache,
    addSearchResultsToCache,
    getSearchResultsFromCache,
} from './Cache';

const cache = createCache(10);

export const fetchResults = async text => {

    if (!text?.length) {
        throw new Error('Text is null');
    }

    const searchQuery = encodeURI(text.toLowerCase());

    const cachedResults = getSearchResultsFromCache(searchQuery, cache);
    if (cachedResults) {
        return cachedResults;
    }

    try {
        const response = await fetch(
            `https://itunes.apple.com/search?term=${searchQuery}&media=music&entity=song`,
        );
        const { results } = await response.json();
        addSearchResultsToCache(searchQuery, results, cache);
        return results;

    } catch (error) {
        throw new Error('Unknown error occured, please check your internet connection and try again');
    }
};
