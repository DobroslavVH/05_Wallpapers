import { Animated, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { WIDTH } from '../../constants/layout'
import { useNavigation } from '@react-navigation/native'

interface RenderImageRowProps {
    item: any
    index: any
    x: Animated.Value
}
const width = Dimensions.get('window').width

const RenderImageRow = ({ item, index, x }: RenderImageRowProps) => {
    const navigation = useNavigation()

    const position = Animated.subtract(index * WIDTH, x)
    const isDisappearing = -WIDTH
    const isTop = 0
    /// possible conflict
    const isBottom = -width - WIDTH
    const isAppearing = width
    // -----------------------------------//
    // original code working
    // const translateX = Animated.add(
    //     x,
    //     x.interpolate({
    //         inputRange: [0, 0.00001 + index * 390],
    //         outputRange: [0, - index * 390],
    //         extrapolate: 'clamp'
    //     })
    // )
    // const scale = position.interpolate({
    //     inputRange: [isDisappearing, isTop, 0, isAppearing],
    //     outputRange: [0.5, 1, 1.1, 0.5],
    //     extrapolate: 'clamp'
    // })
    // const opacity = position.interpolate({
    //     inputRange: [isDisappearing, isTop, 0, isAppearing],
    //     outputRange: [0, 1, 1, 1],
    //     //extrapolate: 'clamp'
    // })
    //--------------------------------------//

    // my test
    const translateX = x.interpolate({
        inputRange: [
            0,
            0.00001 + index * WIDTH,
            0.00002 + index * WIDTH * 4
        ],
        outputRange: [index / 2, 0, - index / 2],
        extrapolate: 'clamp'
    })

    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isAppearing],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp'
    })
    const rotate = position.interpolate({
        inputRange: [isDisappearing, isTop, isAppearing],
        outputRange: ['-15deg', '0deg', '15deg'],
        extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isAppearing],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp'
    })

    const handleOnPress = () => {
        navigation.navigate('FullImage', { item })
    }
    return (
        <Animated.View style={[styles.imageContainer, {
            opacity,
            transform: [
                { translateX },
                { scale },
                { rotate }
            ]
        }]}>
            <TouchableOpacity onPress={() => handleOnPress()}>
                <Image
                    source={{ uri: item?.item }}
                    style={styles.image}
                />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default RenderImageRow

const styles = StyleSheet.create({
    imageContainer: {
        width: WIDTH * 0.75,
        height: WIDTH * 0.5,
        marginHorizontal: WIDTH * 0.125,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: WIDTH * 0.75,
        height: WIDTH * 0.5
    }
})