import React from 'react';
import { View, Modal, ActivityIndicator, Text, StyleSheet } from 'react-native';

const SpinnerView = (props) => {
    return (
        <Modal
            animationIn={'zoomInDown'}
            animationOut={'zoomOutUp'}
            backdropOpacity={0}
            activeOpacity={0.5}
            animationInTiming={5000}
            animationOutTiming={5000}
            backdropTransitionInTiming={5000}
            backdropTransitionOutTiming={5000}
            transparent={true}
            style={styles.container}
        >
            <View style={styles.loaderViewParentStyle}>
                <View style={styles.loaderViewStyle}>
                    <ActivityIndicator size="large" color="black" />
                    <Text style={styles.loaderTextStyle}>{props.text}</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderViewParentStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loaderViewStyle: {
        height: 110,
        width: 170,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    loaderTextStyle: {
        marginTop: 14
    }

});


export default SpinnerView;