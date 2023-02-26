import { TouchableOpacity, Animated, Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors, WIDTH } from '../constants/layout'
import GreenDot from './GreenDot'
import CustomActivityindicator from './CustomActivityindicator'

const RenderImage = ({
    item,
    index,
    itemOnPress,
    indexCompare
}: any) => {

    const [opacity, setOpacity] = useState(new Animated.Value(0))
    const [layoutOpacity, setLayoutopacity] = useState(new Animated.Value(0))
    const [pop, setPop] = useState(new Animated.Value(0))

    const [loading, setLoading] = useState(true)

    const onLoad = () => {
        setLoading(false)
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
        Animated.timing(pop, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    const onLoadEnd = () => {
        Animated.timing(layoutOpacity, {
            toValue: 0.6,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }

    const onPress = ({ item, index }: any) => {
        itemOnPress({ item, index })

        if (!indexCompare(index)) {
            Animated.timing(pop, {
                toValue: 0.66,
                duration: 1000,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(pop, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }).start()
        }
    }

    const renderGreenDot = () => {
        return (
            <>
                {indexCompare(index) && <GreenDot />}
            </>
        )
    }

    return (
        <TouchableOpacity
            onPress={() => onPress({ item, index })}
            style={styles.image}
        >
            <Animated.View
                style={[
                    {
                        opacity: opacity,
                        transform: [
                            {
                                scale:
                                    pop.interpolate({
                                        inputRange: [0, 0.33, 0.66, 1],
                                        outputRange: [0.1, 1.3, 1, 2],
                                    })
                            },
                            {
                                rotate: pop.interpolate({
                                    inputRange: [0, 0.33, 0.66, 1],
                                    outputRange: ['5deg', '-5deg', '0deg', '5deg']
                                })
                            }
                        ]
                    },
                    styles.image
                ]}
            >
                <Image
                    source={{ uri: item }}
                    onLoad={onLoad}
                    onLoadEnd={onLoadEnd}
                    style={styles.image}
                />
                {renderGreenDot()}
            </Animated.View>
            {!indexCompare(index) && (!loading && <Animated.View
                style={[styles.imageOverlay, !loading && {
                    opacity: layoutOpacity,
                    transform: [{
                        scale: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.1, 1]
                        })
                    }]
                }]}
            />)}
            {loading && <CustomActivityindicator size={'small'} color={colors.black} />}
        </TouchableOpacity>
    )
}

export default RenderImage

const styles = StyleSheet.create({
    image: {
        width: WIDTH / 3,
        height: WIDTH / 3,
        position: 'relative',
        overflow: 'hidden'
    },
    grayOverlay: {
        backgroundColor: colors.black,
        opacity: 0.4
    },
    imageOverlay: {
        width: WIDTH / 3,
        height: WIDTH / 3,
        position: 'absolute',
        backgroundColor: colors.white
    }
})