import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#9871F5'
    },
    
    imageBack: {
        flex: 1,
        justifyContent: 'center',
    },

    header: {
        alignItems: 'center',
    },

    title: {
        fontSize: widthPercentageToDP('8%'),
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        maxWidth: widthPercentageToDP('60%'),
        marginBottom: widthPercentageToDP('3%'),
        marginLeft: widthPercentageToDP('8%'),
        marginTop: widthPercentageToDP('8%')
    },

    subTitle: {
        fontSize: widthPercentageToDP('3%'),
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        maxWidth: widthPercentageToDP('80%'),
        marginTop: widthPercentageToDP('3%'),
        marginLeft: widthPercentageToDP('10%')
    },

    enterButtonFilled: {
        marginTop: widthPercentageToDP('8%'),
        backgroundColor: '#04D361',
        height: widthPercentageToDP('15%'),
        borderRadius: widthPercentageToDP('4%'),
        marginHorizontal: widthPercentageToDP('5%'),
        marginBottom: widthPercentageToDP('20%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    enterButtonTextFilled: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#fff',
    },
})

export default styles