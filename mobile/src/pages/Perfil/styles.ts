import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: widthPercentageToDP('-25%'),
        width: '100%',
        height: widthPercentageToDP('40%'),
        marginBottom: widthPercentageToDP('50%'),
    },
    image: {
        marginTop: widthPercentageToDP('35%'),
        width: widthPercentageToDP('30%'),
        borderRadius: widthPercentageToDP('50%'),
        height: widthPercentageToDP('30%'),
    },
    datesPerfil:{
        marginTop: widthPercentageToDP('-15%'),
        paddingTop: widthPercentageToDP('8%'),
        backgroundColor: '#fff',
        borderRadius: widthPercentageToDP('4%'),
        margin:widthPercentageToDP('5%'),
    },
    camera: {
        marginTop: widthPercentageToDP('-7%'),
        marginLeft:widthPercentageToDP('15%'),
        backgroundColor: '#24EF7F',
        padding: widthPercentageToDP('2%'),
        paddingVertical: widthPercentageToDP('5%'),
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: widthPercentageToDP('50%')
    },
    searchForm: {
        marginBottom: widthPercentageToDP('8%'),
    },
    schedule: {
        borderBottomColor: '#E6E6F0',
        borderBottomWidth: 1,
        paddingBottom: widthPercentageToDP('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: widthPercentageToDP('5%'),
        marginTop: widthPercentageToDP('5%'),
    },
    header: {
        borderBottomColor: '#E6E6F0',
        borderBottomWidth: 1,
        paddingBottom: widthPercentageToDP('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: widthPercentageToDP('5%')
    },
    cancel: {
        color: '#E33D3D',
        fontFamily: 'Archivo_700Bold',
        borderBottomColor: '#E33D3D',
        borderBottomWidth: 1,
    },

    subTitle: {
        color: '#32264D',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: widthPercentageToDP('4%'),
    },
    subTitleFooter:{
        color: '#32264D',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: widthPercentageToDP('4%'),
    },

    label: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        marginTop: widthPercentageToDP('3%'),
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
    newSchedule: {
        color: '#8257E5'
    },
    footerButton: {
        borderTopColor: '#E6E6F0',
        borderTopWidth: 1,
        marginVertical: widthPercentageToDP('8%'),
        paddingTop: widthPercentageToDP('5%')
    },
    submitButton: {
        backgroundColor: '#04d361',
        flexDirection:'row',
        marginVertical: widthPercentageToDP('3%'),
        marginHorizontal: widthPercentageToDP('5%'),
        height: widthPercentageToDP('14%'),
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: widthPercentageToDP('4%'),
    },
    deleteSchedule: {
        color: '#E33D3D',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: widthPercentageToDP('3%'),
        marginLeft: widthPercentageToDP('28%'),
        marginBottom: widthPercentageToDP('5%'),
    },
    input: {
        height: widthPercentageToDP('15%'),
        backgroundColor: '#FAFAFC',
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        paddingHorizontal: widthPercentageToDP('3%'),
        marginTop: widthPercentageToDP('2%'),
        borderWidth:1,
        color: '#6A6180',
        fontFamily: 'Poppins_400Regular',
        borderColor: '#D8D8D8',
        marginBottom: widthPercentageToDP('4%')
    },
    userDates: {
        color: '#6A6180',
        fontFamily: 'Poppins_400Regular',
        paddingVertical: widthPercentageToDP('5%'),
        backgroundColor: '#FAFAFC',
        borderRadius: widthPercentageToDP('3%'),
        paddingHorizontal: widthPercentageToDP('3%'),
        marginTop: widthPercentageToDP('2%'),
        borderWidth:1,
        borderColor: '#D8D8D8',
        marginBottom: widthPercentageToDP('4%')
    }
})

export default styles