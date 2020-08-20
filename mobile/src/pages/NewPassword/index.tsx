import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import done from '../../assets/images/Feito.png'
import backG from '../../assets/images/BackgroundSucess.png'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function NewPassword() {
    const navigation = useNavigation()

    function goLogin(){
        navigation.navigate('Login')
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground source={backG} resizeMode="contain" style={styles.imageBack}>
                <View style={styles.header}>
                    <Image source={done} />
                    <Text style={styles.title}>Redefinição enviada</Text>
                    <Text style={styles.subTitle}>Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.</Text>
                </View>
            </ImageBackground>
            <RectButton onPress={goLogin} style={styles.enterButtonFilled}>
                <Text style={styles.enterButtonTextFilled}>Voltar ao Login</Text>
            </RectButton>
        </View>
    )
}

export default NewPassword