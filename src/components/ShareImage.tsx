import { Linking, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../constants/layout'

const ShareImage = ({ item }: any) => {

    const [isPressed, setIsPressed] = useState(false)

    const shareImage = async () => {
        try {
            await Linking.openURL('photos-redirect://')
        } catch (error) {
            console.log(error)
        }
    }
    const handleOnPress = () => {
        shareImage()
        setIsPressed(!isPressed)
        setTimeout(() => {
            setIsPressed(false)
        }, 500)
    }

    return (
        <TouchableOpacity
            onPress={handleOnPress}
        >
            <Icon
                name='share'
                color={isPressed ? colors.orange : colors.lightgray}
                size={isPressed ? 24 : 22} />
        </TouchableOpacity >
    )
}

export default ShareImage