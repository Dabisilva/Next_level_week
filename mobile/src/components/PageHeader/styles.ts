import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        padding: widthPercentageToDP('10%'),
        backgroundColor: '#8257e5',
        paddingTop: 0,
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: widthPercentageToDP('80%')
    },
    border: {
        backgroundColor: '#774DD6',
        borderBottomWidth: 1,
        padding: widthPercentageToDP('10%'),
        paddingTop: widthPercentageToDP('10%'),
        width: widthPercentageToDP('100%'),
        marginLeft: widthPercentageToDP('-10%'),
        paddingVertical: widthPercentageToDP('8%'),
        borderBottomColor: '#6842C2'
    },
    textTitle: {
        color: '#E6E6F0',
        fontFamily: 'Archivo_400Regular'
    },
    headerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: widthPercentageToDP('5%'),
        lineHeight: widthPercentageToDP('10%'),
        maxWidth: widthPercentageToDP('80%'),
        marginVertical: widthPercentageToDP('10%')
    },
    text: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
        marginTop: widthPercentageToDP('-10%'),
        marginBottom: widthPercentageToDP('20%')
    }
})

export default styles;