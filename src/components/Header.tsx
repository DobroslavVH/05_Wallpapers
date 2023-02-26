import { View, StyleSheet } from 'react-native'
import React from 'react'
import { STATUS_BAR_HEIGHT } from '../constants/layout'

const Header = ({ transparent, color }: any) => {
    return (
        <View style={[styles.header, transparent && { opacity: 0, height: 0 }]} />
    )
}
export default Header

const styles = StyleSheet.create({
    header: {
        height: STATUS_BAR_HEIGHT
    }
})