import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: widthPercentageToDP('8%')
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        padding: widthPercentageToDP('5%')
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: widthPercentageToDP('7%'),
        lineHeight: widthPercentageToDP('8%'),
        maxWidth: widthPercentageToDP('40%')
    },

    description: {
        marginTop: widthPercentageToDP('5%'),
        color: '#d4c2ff',
        fontSize: widthPercentageToDP('4%'),
        lineHeight: widthPercentageToDP('5%'),
        fontFamily: 'Poppins_400Regular',
        maxWidth: widthPercentageToDP('70%')
    },

    okButton: {
        marginVertical: widthPercentageToDP('15%'),
        backgroundColor: '#04d361',
        height: widthPercentageToDP('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: widthPercentageToDP('3%')
    },

    okButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: widthPercentageToDP('5%')
    }
})

export default styles;