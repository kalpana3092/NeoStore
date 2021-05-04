import { StyleSheet } from "react-native";
import * as Fonts from "../../utilities/Constants/FontConstant";
import * as Colors from "../../utilities/Constants/ColorConstant";
import { color } from "react-native-reanimated";

const RegisterStyle = StyleSheet.create ({
    safeArea : {
        backgroundColor : '#e91c1a'
    },
    scrollView : {
        backgroundColor : Colors.APP_BG,
        height: '100%'
    },
    scrollContent: {
        paddingBottom: 30
    },
    heading: {
        marginTop: 44,
        textAlign: "center",
        fontFamily:  Fonts.GOTHAM_BOLD,
        color: Colors.WHITE,
        fontSize: 40
    },
    genderView: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,

    },
    genderText: {
        fontFamily: Fonts.GOTHAM_BOLD,
        fontSize: 20,
        color: Colors.WHITE
    },
    genderValueText: {
        fontFamily: Fonts.GOTHAM_BOLD,
        fontSize: 18,
        color: Colors.WHITE
    },
    termsView: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },

    checkbox: {
        height: 25,
        width: 25
    },

    aggreeText: {
        fontFamily: Fonts.GOTHAM_BOLD,
        fontSize: 18,
        color: Colors.WHITE
    },

    termsText: {
        fontFamily: Fonts.GOTHAM_BOLD,
        fontSize: 18,
        color: Colors.WHITE
    },

    termsCondText: {
        fontFamily: Fonts.GOTHAM_BOLD,
        fontSize: 18,
        color: Colors.WHITE,
        textDecorationLine: 'underline',
        textDecorationColor: Colors.WHITE
    },

    registerView: {
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: Colors.WHITE
    },

    registerText: {
        fontFamily: Fonts.GOTHAM_BOLD,
        fontSize: 25,
        color: Colors.APP_TEXT
    }

})
export default RegisterStyle