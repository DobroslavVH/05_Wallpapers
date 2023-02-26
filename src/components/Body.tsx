import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/layout'
import Header from './Header'

const Body = ({ children }: any) => {
    return (
        <View style={styles.container}>
            <Header />
            {children}
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})