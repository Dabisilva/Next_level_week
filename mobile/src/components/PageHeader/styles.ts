import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        padding: widthPercentageToDP('10%'),
        backgroundColor: '#8257e5'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: widthPercentageToDP('7%'),
        lineHeight: widthPercentageToDP('10%'),
        maxWidth: widthPercentageToDP('50%'),
        marginVertical: widthPercentageToDP('15%')
    }
})

export default styles;