
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native';
import SearchBar from '../Helpers/SearchBar';
import ListView from './ListView';
import SpinnerView from '../Helpers/SpinnerView'
import { fetchResults } from '../NetworkApi/SearchItuneConnect';

const LandingPage = (props) => {

    const [data, setData] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onPressSearch = async () => {

        if (!searchQuery || !searchQuery.length) {
            // return with alert if text search query is empty.
            alert('Please enter some search text')
            return;
        }

        setIsLoading(true)

        try {
            // Api call to get the search results.
            const results = await fetchResults(searchQuery);
            setData(results)
            console.log('results', results)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setTimeout(() => {
                Alert.alert('Error', error.message, [
                    { text: 'Ok' },
                ]);
            }, 400);

        }
    }

    const onChangeText = (text) => {
        setSearchQuery(text)
    }

    // Go to item detail component.
    const onPressItem = (item) => {
        props.navigation.navigate('ListItemDetail', { item: item })
    }

    return (
        <View style={styles.container}>
            <SearchBar
                onSubmit={onPressSearch}
                onChangeText={onChangeText}
                isLoading={isLoading}
                onPress={onPressSearch}
            />

            {isLoading && <SpinnerView text={'Loading...'} />}

            <ListView data={data} onPress={onPressItem} />

        </View>
    )
}

LandingPage.navigationOptions = () => ({
    headerTitleStyle: { color: 'white', fontSize: 18 },
    gesturesEnabled: false,
    headerBackTitle: null,

    headerStyle: {
        backgroundColor: '#666666',
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        }
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LandingPage;