import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT, WIDTH } from "../../../constants/layout";

const styles = StyleSheet.create({
    headerView: {
        position: "absolute",
        top: STATUS_BAR_HEIGHT,
        bottom: 0,
        left: 0,
        right: 0,
        height: STATUS_BAR_HEIGHT * 4
    }
})

export default styles