import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/layout'

const GreenDot = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fillContainer} />
        </View>
    )
}

export default GreenDot

const styles = StyleSheet.create({
    container: {
        height: 11,
        width: 11,
        borderRadius: 5.5,
        backgroundColor: colors.white,
        position: 'absolute',
        top: 8,
        right: 8
    },
    fillContainer: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.green,
        position: 'absolute',
        top: 0.5,
        right: 0.5
    }
})