import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
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
    title:{ 
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: widthPercentageToDP('6%')
    },
    createAcount:{
        fontFamily: 'Poppins_400Regular',
        color: '#8257E5'
    },
    inputContainer:{

    },
    input:{

    },

})

export default styles