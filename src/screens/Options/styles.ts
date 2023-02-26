import { StyleSheet } from "react-native";
import { WIDTH, HEIGHT, colors } from "../../constants/layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    activityIndicator: {
        height: HEIGHT,
        width: WIDTH,
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center'
    },
    pressAndHold: {
        height: WIDTH / 3,
        width: WIDTH / 3,
        borderRadius: WIDTH / 6,
        backgroundColor: colors.white,
        position: 'absolute',
        opacity: 0.3,
        top: HEIGHT / 2 - WIDTH / 6,
        left: WIDTH / 2 - WIDTH / 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dismissButton: {
        height: WIDTH / 5,
        width: WIDTH / 5,
        borderRadius: WIDTH / 10,
        backgroundColor: colors.white,
        position: 'absolute',
        top: WIDTH / 10,
        right: WIDTH / 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressAndHoldText: {
        fontSize: 25,
        color: colors.black,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    emptyComponent: {
        height: HEIGHT,
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEmptyComponent: {
        fontSize: 24,
        fontStyle: 'italic',
        color: colors.darkgray
    }
})

export default styles
