import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#8257E5',
        alignItems: 'center',
        justifyContent: 'center',
        height: widthPercentageToDP('100%')
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: widthPercentageToDP('15%')
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: widthPercentageToDP('7%'),
        marginTop: widthPercentageToDP('10%'),
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: widthPercentageToDP('6%')
    },
    createAcount: {
        fontFamily: 'Poppins_400Regular',
        color: '#8257E5'
    },
    inputContainer: {
        margin: widthPercentageToDP('5%')
    },
    inputPassword: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonEye: {
        marginLeft: widthPercentageToDP('-8%')
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
        // borderColor: '#E6E6F0',
        // borderWidth: 1
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

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: widthPercentageToDP('10%')
    },

    footerText: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        fontSize: widthPercentageToDP('3%')
    },

    remember: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    enterButton: {
        marginTop: widthPercentageToDP('8%'),
        backgroundColor: '#DCDCE5',
        height: widthPercentageToDP('15%'),
        borderRadius: widthPercentageToDP('4%'),
        marginHorizontal: widthPercentageToDP('10%'),
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
        marginHorizontal: widthPercentageToDP('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    enterButtonTextFilled: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#fff',
    },

})

export default styles