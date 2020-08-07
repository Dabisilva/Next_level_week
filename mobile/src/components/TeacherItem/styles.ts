import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: widthPercentageToDP('4%'),
        marginBottom: widthPercentageToDP('3%'),
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: widthPercentageToDP('5%'),
    },

    avatar: {
        width: widthPercentageToDP('20%'),
        height: widthPercentageToDP('20%'),
        borderRadius: widthPercentageToDP('50%'),
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: widthPercentageToDP('5%')
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: widthPercentageToDP('5%')
    },

    subject:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: widthPercentageToDP('3%'),
        marginTop: widthPercentageToDP('1%')
    },
    bio: {
        marginHorizontal: widthPercentageToDP('5%'),
        fontFamily: 'Poppins_400Regular',
        fontSize: widthPercentageToDP('4%'),
        lineHeight: widthPercentageToDP('5%'),
        color: '#6a6180'
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: widthPercentageToDP('5%'),
        alignItems: 'center',
        marginTop: widthPercentageToDP('5%')
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: widthPercentageToDP('3%')
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: widthPercentageToDP('4%')
    },

    buttonContainer:{
        flexDirection: 'row',
        marginTop: widthPercentageToDP('2%')
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: widthPercentageToDP('14%'),
        height: widthPercentageToDP('14%'),
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:widthPercentageToDP('3%')
    },
    favorited: {
        backgroundColor: '#e33d3d'
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        flexDirection:'row',
        height: widthPercentageToDP('14%'),
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:widthPercentageToDP('3%')
    },

    contactButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: widthPercentageToDP('4%'),
        marginLeft: widthPercentageToDP('2%')
    }

})

export default styles