import { View, FlatList, Animated } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './styles'
import ImageContext from '../../context'
import RenderPreviewImage from '../../components/RenderPreviewImage'
import { Text } from 'react-native'

const OptionsScreen = () => {
    const { filteredImageArray }: any = useContext(ImageContext)
    const [scrollEnabled, setScrollEnabled] = useState(true)

    let t = new Animated.Value(0)
    Animated.timing(t, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
    }).start()

    const renderItem = (item: any) => {
        return (
            <RenderPreviewImage
                item={item}
                setScrollEnabled={setScrollEnabled}
                scrollEnabled={scrollEnabled}
            />
        )
    }

    const renderEmptyComponent = () => {
        return (
            <Animated.View
                style={[styles.emptyComponent, {
                    opacity: t,
                    transform: [{
                        scale: t.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.5, 1]
                        })
                    }]
                }]}
            >
                <Text style={styles.textEmptyComponent}>Please go back and</Text>
                <Text style={styles.textEmptyComponent}>select some images!</Text>
            </Animated.View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredImageArray}
                scrollEnabled={scrollEnabled}
                keyExtractor={(image) => image.index}
                renderItem={({ item }) => renderItem(item)}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={renderEmptyComponent()}
            />
        </View>
    )
}

export default OptionsScreen