import React, { memo } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import ListItemView from './ListItemView';

const ListView = (props) => {
    const keyExtractor = item => `${item.trackId}`;

    const renderEmptyState = () => (
        <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>{'List is Empty!'}</Text>
        </View>
    );

    const renderItem = ({ item, index }) => (
        <TouchableOpacity activeOpacity={0.9} onPress={() => props.onPress(item)}>
            <ListItemView data={item} />
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={props.data}
            ListEmptyComponent={renderEmptyState}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );

}

const styles = StyleSheet.create({
    emptyState: {
        marginTop: 50,
        alignItems: 'center',
    },
    emptyStateText: {
        fontSize: 20,
        color: '#888',
    },
});

export default memo(ListView);