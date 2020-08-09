import React from 'react'
import { View, Image, ImageBackground, Text, TextInput } from 'react-native'

import BgImage from '../../assets/images/Background.png'
import inicialIcon from '../../assets/images/Vector.png'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

const Login: React.FC = () => {
    return (
        <View>
            <View style={styles.header}>
                <ImageBackground source={BgImage} resizeMode="contain" style={styles.content}>
                    <Image source={inicialIcon} />
                </ImageBackground>
            </View>
            <View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Fazer Login</Text>
                    <Text style={styles.createAcount}>Criar uma conta</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="E-mail" />
                    <TextInput style={styles.input} placeholder="Senha" />
                </View>

                <View>
                    <View>
                        <Text>Lembrar-me</Text>
                    </View>
                    <Text>Esqueci minha senha</Text>
                </View>

                <RectButton>
                    <Text>Entrar</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default Login;