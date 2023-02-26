import { Dimensions } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"

export const WIDTH = Dimensions.get('screen').width

export const HEIGHT = Dimensions.get('screen').height

export const STATUS_BAR_HEIGHT = getStatusBarHeight()

export const colors = {
    black: 'black',
    white: 'white',
    green: 'lightgreen',
    orange: 'orange',
    lightgray: 'lightgray',
    gray: 'gray',
    darkgray: 'darkgray',
    red: 'red'
}