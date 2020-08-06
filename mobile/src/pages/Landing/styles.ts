import { StyleSheet } from "react-native";
import { widthPercentageToDP } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: widthPercentageToDP('5%')
    },
    bunner: {
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontSize: widthPercentageToDP('5%'),
        lineHeight: widthPercentageToDP('8%'),
        marginTop: widthPercentageToDP('20%')
    },
    titleBold: {
        fontWeight: 'bold'
    }
})

export default styles