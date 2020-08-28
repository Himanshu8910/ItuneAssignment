import React, { memo } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { dateFormat } from '../Helpers/DateFormatter'
let deviceWidth = Dimensions.get('window').width

const ListItemView = ({ data, style, imageStyle }) => {
    const {
        artistName,
        artworkUrl100,
        collectionName,
        releaseDate,
    } = data;

    return (
        <View style={[styles.container, style]}>
            <View>
                <Image
                    style={[styles.imageViewStyle, imageStyle]}
                    source={{ uri: artworkUrl100 }}
                />
                <View style={styles.textContainerViewStyle}>
                    <Text style={styles.artistNameStyle} numberOfLines={1}>
                        {artistName}
                    </Text>
                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.textColorGray} numberOfLines={1}>
                            Release date: <Text style={styles.textColorWhite}>{dateFormat(new Date(releaseDate))}</Text>
                        </Text>

                        <Text style={styles.textColorGray} numberOfLines={2}>
                            {/* {releaseDate} */}
                            Collection: <Text style={styles.textColorWhite}>{collectionName}</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 240,
        margin: 4,
        backgroundColor: 'rgb(46,46,46)',
        width: (deviceWidth - 16) / 2,
        borderWidth: 1,
        borderColor: 'black'
    },
    imageViewStyle: {
        width: (deviceWidth - 26) / 2,
        height: 150,
        marginRight: 10,
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
    textContainerViewStyle: {
        margin: 4
    },
    artistNameStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    textColorWhite: {
        color: 'white'
    },
    textColorGray: {
        color: '#999999'
    }
});

export default memo(ListItemView);