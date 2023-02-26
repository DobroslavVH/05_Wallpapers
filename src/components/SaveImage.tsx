import { Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../constants/layout'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { check, PERMISSIONS, request } from 'react-native-permissions'
import RNFetchBlob from 'rn-fetch-blob'

const SaveImage = ({ item, setSuccessfullySaved }: any) => {

    const [isPressed, setIsPressed] = useState(false)

    const handleSavePhoto = async () => {
        const response = await check(PERMISSIONS.IOS.PHOTO_LIBRARY)
        if (response === 'denied') {
            const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
        }
        // fetching image 
        RNFetchBlob.config({
            fileCache: true,
            appendExt: 'jpg'
        })
            .fetch('GET', item)
            .then((res) => {
                //passing downloaded image to camera roll
                CameraRoll.save(res.data)
                    .then(() => {
                        setSuccessfullySaved(true)
                        // Alert.alert(
                        //     'Save remote Image',
                        //     'Image Saved Successfully',
                        //     [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                        //     { cancelable: false },
                        // );
                    })
                    .catch(err => {
                        setSuccessfullySaved(false)
                        // Alert.alert(
                        //     'Save remote Image',
                        //     'Failed to save Image: ' + err.message,
                        //     [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                        //     { cancelable: false },
                        // );
                    })
                    .finally(() => console.log('image is saved'))
            })
    }

    const handleOnPress = () => {
        handleSavePhoto()
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
                name='save'
                color={isPressed ? colors.orange : colors.lightgray}
                size={isPressed ? 24 : 22} />
        </TouchableOpacity >
    )
}

export default SaveImage