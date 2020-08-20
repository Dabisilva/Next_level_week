import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
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

    buttonBack: {
        marginLeft: widthPercentageToDP('8%'),
        marginTop: widthPercentageToDP('5%')
    },

    containerTitle: {
        marginTop: widthPercentageToDP('10%'),
        marginLeft: widthPercentageToDP('8%'),
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: widthPercentageToDP('6%')
    },
    subTitle: {
        color: '#32264D',
        fontFamily: 'Poppins_400Regular',
        fontSize: widthPercentageToDP('4%'),
        maxWidth: widthPercentageToDP('50%')
    },
    createAcount: {
        fontFamily: 'Poppins_400Regular',
        color: '#8257E5'
    },
    inputContainer: {
        margin: widthPercentageToDP('5%')
    },
    input: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        borderRadius: widthPercentageToDP('2%'),
        marginHorizontal: widthPercentageToDP('5%'),
        height: widthPercentageToDP('15%'),
        paddingLeft: widthPercentageToDP('5%'),
        backgroundColor: '#fff',
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