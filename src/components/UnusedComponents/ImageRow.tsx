import { StyleSheet, Animated, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ImageContext from '../../context'
import { colors, WIDTH } from '../../constants/layout'
import RenderImageRow from './RenderImageRow'

const ImageRow = () => {
    const { filteredImageArray }: any = useContext(ImageContext)

    // ----- empty component animation stuffs
    const t = new Animated.Value(0)
    useEffect(() => {
        Animated.timing(t, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }, [filteredImageArray])
    // -----

    const x = new Animated.Value(0)

    const onScroll = Animated.event(
        [
            { nativeEvent: { contentOffset: { x } } }
        ],
        { useNativeDriver: true }
    )

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
        <Animated.View style={styles.flatlistContainer}>
            <Animated.FlatList
                data={filteredImageArray}
                keyExtractor={(item) => item.index}
                renderItem={({ item, index }) => <RenderImageRow item={item} index={index} x={x} />}

                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}

                pagingEnabled={true}

                ListEmptyComponent={renderEmptyComponent}
            />
        </Animated.View>
    )
}

export default ImageRow

const styles = StyleSheet.create({
    flatlistContainer: {
        marginVertical: 30,
    },

    // image stuffs
    imageContainer: {
        width: WIDTH / 2,
        height: WIDTH / 2,
        marginHorizontal: WIDTH / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: WIDTH / 2,
        height: WIDTH / 3
    },

    // empty component stuffs
    emptyComponent: {
        height: WIDTH * 0.5 + 60,
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEmptyComponent: {
        fontSize: 20,
        fontStyle: 'italic',
        color: colors.darkgray
    }
})