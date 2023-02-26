import { View, Text, Animated } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Body from '../../../components/Body'
import SettingsHeader from '../../../components/UnusedComponents/SettingsHeader'
import styles from './styles'
import { STATUS_BAR_HEIGHT } from '../../../constants/layout'
import ImageRow from '../../../components/UnusedComponents/ImageRow'
import ChangeTime from '../../../components/UnusedComponents/ChangeTime'
import WallpaperManager, { TYPE } from 'react-native-wallpaper-manage'
//import WallPaperManager from '@ajaybhatia/react-native-wallpaper-manager'
import ImageContext from '../../../context'


const SettingsScreen = () => {

    const { filteredImageArray }: any = useContext(ImageContext)



    const [triggerAnimation, setTriggerAnimation] = useState(false)
    // monitor scroll from scroll view
    const scrolling = useRef(new Animated.Value(0)).current

    // animated value for header, to be shown or hidden
    const translation = scrolling.interpolate({
        inputRange: [-STATUS_BAR_HEIGHT * 0.8, STATUS_BAR_HEIGHT * 4],
        outputRange: [0, -STATUS_BAR_HEIGHT * 4],
        extrapolate: 'clamp'
    })

    const renderHeader = () => {
        return (
            <Animated.View
                style={[styles.headerView, { transform: [{ translateY: translation }] }]}
            >
                <SettingsHeader trigger={triggerAnimation} />
            </Animated.View>
        )
    }

    return (
        <Body>
            {renderHeader()}
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrolling } } }
                ], {
                    useNativeDriver: true,
                    listener: event => {
                        const { contentOffset: { y } } = event.nativeEvent
                        y === -1 ? setTriggerAnimation(true) : setTriggerAnimation(false)
                    }
                })}
            >
                <View style={{ height: 1200, top: STATUS_BAR_HEIGHT * 3 }}>
                    <ImageRow />
                    <ChangeTime />
                    {/* <Text>Settings Screen </Text> */}
                </View>
            </Animated.ScrollView>
        </Body >
    )
}

export default SettingsScreen