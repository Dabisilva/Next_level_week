import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    datesPerfil:{
        marginTop: widthPercentageToDP('-15%'),
        paddingTop: widthPercentageToDP('8%'),
        backgroundColor: '#fff',
        borderRadius: widthPercentageToDP('4%'),
        margin:widthPercentageToDP('5%'),
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
    subTitle: {
        color: '#32264D',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: widthPercentageToDP('4%'),
        borderBottomColor: '#E6E6F0',
        borderBottomWidth: 1,
        paddingBottom: widthPercentageToDP('2%')
    },
    subTitleFooter:{
        color: '#32264D',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: widthPercentageToDP('4%'),
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
        marginLeft: widthPercentageToDP('28%')

    },
    input: {
        height: widthPercentageToDP('15%'),
        backgroundColor: '#FAFAFC',
        borderRadius: widthPercentageToDP('3%'),
        justifyContent: 'center',
        paddingHorizontal: widthPercentageToDP('3%'),
        marginTop: widthPercentageToDP('2%'),
        borderWidth:1,
        borderColor: '#D8D8D8',
        marginBottom: widthPercentageToDP('4%')
    }
})

export default styles