import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

function GiveClasses(){
    const navigation = useNavigation()
    
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" style={styles.content} source={giveClassesBgImage}>
                <Text style={styles.title}>Quer ser um proffy</Text>
                <Text style={styles.description}>Para começar voçê precisa se cadastrar como professor na nossa plataforma web</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={ ()=> navigation.goBack()}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;