import { StyleSheet } from 'react-native'
import { colors, WIDTH } from '../../constants/layout'

const styles = StyleSheet.create({
    image: {
        width: WIDTH / 3,
        height: WIDTH / 3
    },
    row: {
        width: WIDTH,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    grayOverlay: {
        backgroundColor: 'orange',
        opacity: 0.4
    },
    footerComponentsStyle: {
        height: 47
    }
})

export default styles