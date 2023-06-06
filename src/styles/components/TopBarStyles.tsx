import { StyleSheet } from "react-native";
import { COLORS } from "../../library/CommonColors";

export default StyleSheet.create({
    container : {
        position: 'absolute',
        top:5,
        alignItems : "center",
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        width : "100%",
        height : 50,
    },
    textInput : {
        justifyContent: 'center',
        backgroundColor : COLORS.componentBackground,
        height: "100%",
        width : "90%",
        borderRadius : 15,
        paddingLeft : 20,
        paddingRight : 20,
        fontWeight : "700",
        color : COLORS.foreground,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    returnButtonContainer : {   
        position:'absolute',
        left: 20,
    },
    returnButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: COLORS.clickableColor,
        borderRadius: 40,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    }
});