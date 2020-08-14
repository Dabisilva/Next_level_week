import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import done from '../../assets/images/Feito.png'
import backG from '../../assets/images/BackgroundSucess.png'
import styles from './styles'

function RegisterCompleted() {
    const navigation = useNavigation()

    function Login(){
        
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={backG} resizeMode="contain" style={styles.imageBack}>
                <View style={styles.header}>
                    <Image source={done} />
                    <Text style={styles.title}>Cadastro Concluido</Text>
                    <Text style={styles.subTitle}>Agora você faz parte da plataforma Proffy</Text>
                </View>
            </ImageBackground>
            <RectButton onPress={Login} style={styles.enterButtonFilled}>
                <Text style={styles.enterButtonTextFilled}>Fazer Login</Text>
            </RectButton>
        </View>
    )
}

export default RegisterCompleted