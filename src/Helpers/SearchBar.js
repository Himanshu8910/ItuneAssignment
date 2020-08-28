import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Text,
    View,
} from 'react-native';


export default function SearchBar({
    isLoading,
    style,
    onChangeText,
    onSubmit,
    onPress,
}) {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                autoFocus
                style={styles.textInput}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                numberOfLines={1}
                autoCorrect={false}
                placeholder={'Search artists, songs, albums'}
            />
            <TouchableOpacity style={styles.searchButton} onPress={onPress}>
                <Text style={styles.searchButtonText}>{'Search'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: '#666666',
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        fontSize: 20,
    },
    loading: {
        marginLeft: 10,
    },
    searchButton: {
        borderColor: '#666666',
        backgroundColor: '#666666',
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
    },
    searchButtonText: {
        color: 'white',
    },
});
