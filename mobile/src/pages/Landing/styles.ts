import { StyleSheet } from "react-native";
import { widthPercentageToDP } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: widthPercentageToDP('5%')
    },

    bunner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        fontSize: widthPercentageToDP('5%'),
        lineHeight: widthPercentageToDP('8%'),
        marginTop: widthPercentageToDP('20%')
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer :{
        flexDirection: 'row',
        marginTop: widthPercentageToDP('7%'),
        justifyContent: 'space-between'
    },

    button: {
        height : widthPercentageToDP('40%'),
        width: '48%',
        backgroundColor: '#333',
        borderRadius: widthPercentageToDP('2%'),
        padding: widthPercentageToDP('7%'),
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },


    buttonSecondary: {
        backgroundColor:  '#04d361'
    },

    buttonText: {
        fontFamily:  'Archivo_700Bold',
        color: '#fff',
        fontSize: widthPercentageToDP('4.5%')
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: widthPercentageToDP('3%'),
        lineHeight: widthPercentageToDP('5%'),
        maxWidth: widthPercentageToDP('40%'),
        marginTop: widthPercentageToDP('5%')
    }
})

export default styles