import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const CustomActivityindicator = ({ size, color }: any) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default CustomActivityindicator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        justifyContent: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.1
    }
})