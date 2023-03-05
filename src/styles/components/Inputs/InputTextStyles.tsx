import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    txtFieldBackground: {
        justifyContent: 'center',
        width: '85%',
        height: 55,
        marginBottom: 30,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: COLORS.componentBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    holderText: {
        position: 'absolute',
        textAlign: 'left',
        color: COLORS.foregroundHolder,
        width: '100%',
        top: 10,
        left: 18,
        fontSize: 13,
        lineHeight: 16,
    },
    inputText: {
        textAlignVertical: 'top',  
        textAlign: 'left',
        color: COLORS.foreground,
        width: '100%',
        height: '100%',
        overflow:'hidden',
        paddingTop: 25,
        paddingLeft: 8,
    },
})