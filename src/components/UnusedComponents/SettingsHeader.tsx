import { View, Animated, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../constants/layout'
import Icon from 'react-native-vector-icons/FontAwesome'

const SettingsHeader = ({ trigger }: any) => {

    const [shake, setShake] = useState(new Animated.Value(0))

    useEffect(() => {
        if (trigger === true) {
            setShake(new Animated.Value(0))
        }
    }, [trigger])

    Animated.timing(shake, {
        toValue: 10,
        duration: 600,
        useNativeDriver: true
    }).start()

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    {
                        transform: [{
                            rotate: shake.interpolate({
                                inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                                outputRange: ['0deg', '5deg', '-5deg', '5deg', '-5deg', '5deg', '-5deg', '5deg', '-5deg', '5deg', '0deg'],
                                extrapolate: 'clamp'
                            })
                        }]
                    }
                ]}
            >
                <TouchableOpacity onPress={() => setShake(new Animated.Value(0))}>
                    <Icon name='gear' size={150} color={"lightgray"} />
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default SettingsHeader

const styles = StyleSheet.create({
    container: {
        height: STATUS_BAR_HEIGHT * 4,
        width: WIDTH,
        justifyContent: "center",
        alignItems: 'center'
    },
    animatedView: {
        height: STATUS_BAR_HEIGHT * 3,
        width: STATUS_BAR_HEIGHT * 3
    }
})