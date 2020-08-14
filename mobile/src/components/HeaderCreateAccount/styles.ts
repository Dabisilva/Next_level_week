import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container: {
        paddingTop: widthPercentageToDP('10%'),
        marginHorizontal: widthPercentageToDP('5%'),
        marginBottom: widthPercentageToDP('15%')
    },
})

export default styles