import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { time } from '../../constants/UnusedConstants/time'
import { StyleSheet } from 'react-native'
import { colors, WIDTH } from '../../constants/layout'
import ImageContext from '../../context'

const ChangeTime = () => {

    const { filteredImageArray }: any = useContext(ImageContext)

    const [selectedIndex, setSelectedIndex] = useState()

    const touchCheck = ({ item }: any) => {
        return time.indexOf(item)
    }

    const handleOnPress = ({ item, index }: any) => {
        setSelectedIndex(index)
    }

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                disabled={filteredImageArray.length === 0 ? true : false}
                key={index}
                onPress={() => handleOnPress({ item, index })}
                style={[styles.singleItem, touchCheck({ item }) !== selectedIndex && styles.pressedItem]}
            >
                <Text style={[styles.text, touchCheck({ item }) === selectedIndex && { color: colors.black }]}>{item.name}</Text>
            </TouchableOpacity >
        )
    }
    return (
        <View style={styles.container}>
            {time.map((item, index) => renderItem({ item, index }))}
        </View>
    )
}

export default ChangeTime

const styles = StyleSheet.create({
    container: {
        width: WIDTH - 2,
        paddingBottom: WIDTH * 0.03,
        paddingHorizontal: WIDTH * 0.125,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    singleItem: {
        marginTop: WIDTH * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH * 0.15,
        height: WIDTH * 0.12,
        borderRadius: WIDTH * 0.07,
        borderWidth: 0.2,
        borderColor: colors.lightgray,
        borderRightWidth: 1
    },
    pressedItem: {
        backgroundColor: '#fafafa',
        borderBottomWidth: 0.2,
        borderRightWidth: 0.2,
        borderLeftWidth: 1
    },
    text: {
        color: colors.darkgray,
        fontSize: 16,
    }
})