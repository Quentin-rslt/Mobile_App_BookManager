import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '15%',
    },
    button: {
        justifyContent: 'center',
        width: '50%',
        position: 'absolute',
        bottom: 8,
        paddingHorizontal: '25%',
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        height: 45,
        borderRadius : 17,
    },
});