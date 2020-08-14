import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const HeaderCreateAccount: React.FC = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" color="#9C98A6" size={widthPercentageToDP('6%')} />
            </TouchableOpacity>
            
        </View>
    )
}

export default HeaderCreateAccount 