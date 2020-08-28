import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { dateFormat } from '../Helpers/DateFormatter'

const MARGIN_POPVIEW = 30

const ListItemDetail = ({ navigation }) => {
    const data = navigation.getParam('item', {});

    const {
        artistName,
        artworkUrl100,
        collectionName,
        releaseDate,
        country,
        currency,
        collectionPrice,
        kind
    } = data;

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={styles.topChildEmptyView}>
            </View>
            <View style={styles.bottomChildViewContainer}>
                <View style={styles.popOverViewStyle}>
                    <Image
                        style={[styles.artwork]}
                        source={{ uri: artworkUrl100 }}
                    />
                    <Text style={styles.textStyle}>Collection Name: <Text style={styles.textFontWeight}>{collectionName}</Text></Text>
                    <Text style={styles.textStyle}>Artist Name: <Text style={styles.textFontWeight}>{artistName}</Text></Text>
                    <Text style={styles.textStyle}>Type: <Text style={styles.textFontWeight}>{kind}</Text></Text>
                    <Text style={styles.textStyle}>Country: <Text style={styles.textFontWeight}>{country}</Text></Text>
                    <Text style={styles.textStyle}>Collection price: <Text style={styles.textFontWeight}>{collectionPrice}</Text></Text>
                    <Text style={styles.textStyle}>Currency: <Text style={styles.textFontWeight}>{currency}</Text></Text>
                    <Text style={styles.textStyle}>Release date: <Text style={styles.textFontWeight}>{dateFormat(new Date(releaseDate))}</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

ListItemDetail.navigationOptions = ({ navigation }) => ({
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
        flexDirection: 'row',
        height: 240,
        margin: 4,
        width: 200,
        borderWidth: 1,
        borderColor: 'black'
    },
    artwork: {
        width: Dimensions.get('window').width - (MARGIN_POPVIEW * 2),
        height: 300,
        marginRight: 10,
        marginBottom: 20
    },
    details: {
        justifyContent: 'space-between',
    },
    moreDetails: {
        marginTop: 20,
    },
    description: {
        fontSize: 14,
        color: 'white',
    },
    textFontWeight: {
        fontWeight: '300'
    },
    textStyle: {
        fontSize: 16,
        padding: 6,
        fontWeight: '500'
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    topChildEmptyView: {
        height: 144,
        backgroundColor: '#666666'
    },
    bottomChildViewContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    popOverViewStyle: {
        marginLeft: MARGIN_POPVIEW,
        marginRight: MARGIN_POPVIEW,
        top: -120,
        height: Dimensions.get('window').height - 180,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        elevation: 3,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: 'gray',
    }
});

export default ListItemDetail;