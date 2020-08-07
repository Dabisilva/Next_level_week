import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList:{
        marginTop: widthPercentageToDP('-15%'),
    },

    searchForm: {
        marginBottom: widthPercentageToDP('8%'),
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    filterButton:{
        flexDirection: 'row',
    },

    filterButtonText:{
        color: '#fff',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    submitButton: {
        backgroundColor: '#04d361',
        flexDirection:'row',
        marginLeft: widthPercentageToDP('25%'),
        maxWidth: widthPercentageToDP('30%'),
        height: widthPercentageToDP('14%'),
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: widthPercentageToDP('4%')
    },

    input: {
        height: widthPercentageToDP('15%'),
        backgroundColor: '#fff',
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        paddingHorizontal: widthPercentageToDP('3%'),
        marginTop: widthPercentageToDP('2%'),
        marginBottom: widthPercentageToDP('4%')
    }
})

export default styles