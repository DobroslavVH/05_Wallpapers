import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors, HEIGHT, WIDTH } from '../constants/layout'

const CustomIndicator = ({ loading }: any) => {
    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator color={colors.black} animating={loading} size={'large'} />
        </View>
    )
}
export default CustomIndicator

const styles = StyleSheet.create({
    activityIndicator: {
        height: HEIGHT,
        width: WIDTH,
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center',
        opacity: 0.1
    }
})