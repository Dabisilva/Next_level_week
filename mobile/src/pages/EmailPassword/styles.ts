import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerInput: {
        margin: widthPercentageToDP('5%')
    },
    titleHeader:{
        marginHorizontal: widthPercentageToDP('8%'),
        marginBottom: widthPercentageToDP('20%')
    },
    title: {
        color: '#32264D',
        fontFamily: 'Poppins_600SemiBold',
        maxWidth: widthPercentageToDP('60%'),
        fontSize: widthPercentageToDP('7%'),
        marginBottom: widthPercentageToDP('2%'),
    },

    secundTitle: {
        color: '#6A6180',
        fontFamily: 'Poppins_400Regular', 
    },

    titleForm: {
        marginHorizontal: widthPercentageToDP('10%'),
        color: '#32264D',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: widthPercentageToDP('5%')
    },
    input1: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        borderTopLeftRadius: widthPercentageToDP('2%'),
        borderTopRightRadius: widthPercentageToDP('2%'),
        marginHorizontal: widthPercentageToDP('5%'),
        height: widthPercentageToDP('15%'),
        paddingLeft: widthPercentageToDP('5%'),
        backgroundColor: '#FAFAFC',
        borderColor: '#E6E6F0',
        borderWidth: 1
    },
    input: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        width: widthPercentageToDP('80%'),
        borderBottomLeftRadius: widthPercentageToDP('2%'),
        borderBottomRightRadius: widthPercentageToDP('2%'),
        marginLeft: widthPercentageToDP('5%'),
        height: widthPercentageToDP('15%'),
        paddingLeft: widthPercentageToDP('5%'),
        backgroundColor: '#FAFAFC',
        borderColor: '#E6E6F0',
        borderWidth: 1
    },
    inputPassword: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonEye: {
        marginLeft: widthPercentageToDP('-8%')
    },
    enterButton: {
        marginTop: widthPercentageToDP('8%'),
        backgroundColor: '#DCDCE5',
        height: widthPercentageToDP('15%'),
        borderRadius: widthPercentageToDP('4%'),
        marginHorizontal: widthPercentageToDP('5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    enterButtonText: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#9C98A6',
    },
    enterButtonFilled: {
        marginTop: widthPercentageToDP('8%'),
        backgroundColor: '#04D361',
        height: widthPercentageToDP('15%'),
        borderRadius: widthPercentageToDP('4%'),
        marginHorizontal: widthPercentageToDP('5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    enterButtonTextFilled: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#fff',
    },
})

export default styles