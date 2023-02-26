import { View, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useState } from 'react'
import { colors, HEIGHT, WIDTH } from '../constants/layout'
import CustomIndicator from './CustomIndicator'
import Icon from 'react-native-vector-icons/FontAwesome'
import SaveImage from './SaveImage'
import ShareImage from './ShareImage'

const RenderPreviewImage = ({
    item,
    setScrollEnabled,
    scrollEnabled
}: any) => {
    const [pressed, setPressed] = useState(null)
    const [loading, setLoading] = useState(true)
    const [successfullySaved, setSuccessfullySaved] = useState()

    let s = new Animated.Value(0)

    console.log('loading', loading)

    if (pressed) {
        Animated.timing(s, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true
        }).start()
    } else {
        Animated.timing(s, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true
        }).start()
    }



    const renderImageOverlay = () => {
        return (
            <>
                <Animated.View style={[
                    styles.overlay,
                    pressed && { borderRadius: 48 },
                    {
                        opacity: s.interpolate({
                            inputRange: [0, 1],
                            outputRange: pressed ? [0, 0.5] : [0.5, 0]
                        })
                    }]} />

                <CustomIndicator loading={loading} />
            </>
        )
    }

    const renderSaveStatusMessage = () => {
        if (successfullySaved === true && pressed) {
            return (
                <Animated.View style={{ position: "absolute", right: 45, top: 40 }}>
                    <Icon name='check-circle' size={55} color={colors.green} />
                </Animated.View>
            )
        }
        if (successfullySaved === false && pressed) {
            return (
                <View style={{ position: "absolute", right: 45, top: 40 }}>
                    <Icon name='close' size={45} color={colors.red} />
                </View>
            )
        }

    }

    const renderOptionsPanel = ({ item }: any) => {
        return (
            <Animated.View style={[
                styles.optionsPanelContainer, {
                    transform: [{
                        translateY: s.interpolate({
                            inputRange: [0, 1],
                            outputRange: pressed ? [765, 695] : [695, 765],
                            extrapolate: 'extend'
                        })
                    }]
                }
            ]}
            >
                <View style={styles.contentContainer}>
                    <SaveImage
                        item={item}
                        setSuccessfullySaved={setSuccessfullySaved}
                    />
                    <ShareImage item={item} />
                </View>
            </Animated.View>
        )
    }

    return (
        <View
            style={[styles.image, pressed && { borderRadius: 48 }]}
        >
            <TouchableOpacity
                activeOpacity={1}
                onLongPress={() => {
                    setPressed(!pressed)
                    setScrollEnabled(!scrollEnabled)
                }}
                delayLongPress={200}
            >
                <Animated.View
                    style={[styles.image, styles.shadow, {
                        backgroundColor: colors.white,
                        transform: [{
                            scale: s.interpolate({
                                inputRange: [0, 1],
                                outputRange: pressed ? [1, 0.96] : [0.96, 1]
                            })
                        }]
                    }, pressed && { borderRadius: 48 }]}
                >
                    <Image
                        source={{ uri: item?.item }}
                        style={[styles.image, pressed && { borderRadius: 48 }]}
                        onLoadEnd={() => setLoading(false)}
                    />
                    {renderImageOverlay()}
                    {renderSaveStatusMessage()}
                </Animated.View>
            </TouchableOpacity>

            {renderOptionsPanel(item)}
        </View>
    )
}

export default RenderPreviewImage

const styles = StyleSheet.create({
    image: {
        height: HEIGHT,
        width: WIDTH,
        //borderTopLeftRadius: 48,
        //borderTopRightRadius: 48
    },
    shadow: {
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    overlay: {
        backgroundColor: colors.black,
        position: 'absolute',
        height: HEIGHT,
        width: WIDTH,
        justifyContent: "center",
        alignItems: 'center'
    },
    // options panel stuffs
    optionsPanelContainer: {
        position: 'absolute',
        backgroundColor: colors.white,
        width: WIDTH,
        height: 70,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    contentContainer: {
        flex: 1,
        margin: 10,
        marginHorizontal: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    }
})