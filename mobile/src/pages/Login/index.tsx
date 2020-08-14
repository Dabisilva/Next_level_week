import React, { useState, useEffect, useContext } from 'react'
import { View, Image, ImageBackground, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, CheckBox, Platform, Alert, AsyncStorage } from 'react-native'
import { Feather } from '@expo/vector-icons'
import BgImage from '../../assets/images/Background.png'
import inicialIcon from '../../assets/images/Intro.png'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../contexts/auth'

import styles from './styles'

const Login: React.FC = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [showPassowrd, setShowpassord] = useState(false);
    const { SignIn, signed } = useContext(AuthContext)

    function createAcount() {
        navigation.navigate('CreateAccount')
    }

    async function Login() {
        SignIn(email, password)
    }

    function eyeShow() {
        setShowpassord(!showPassowrd)
    }

    function AwaitButton() {
        if (password.length >= 8 && email.length >= 10) {
            return (
                <RectButton onPress={Login} style={styles.enterButtonFilled}>
                    <Text style={styles.enterButtonTextFilled}>Entrar</Text>
                </RectButton>
            )
        } else {
            return (
                <View style={styles.enterButton}>
                    <Text style={styles.enterButtonText}>Entrar</Text>
                </View>
            )
        }
    }
    useEffect(()=> {
        const userDatas = AsyncStorage.getItem('@ProffyAuth:user')
        console.log({signed, userDatas})
    }, [])
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={BgImage} resizeMode="contain" style={styles.content}>
                    <Image source={inicialIcon} />
                </ImageBackground>
            </View>
            <View >
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Fazer Login</Text>
                    <TouchableOpacity onPress={createAcount}>
                        <Text style={styles.createAcount}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input1}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <View style={styles.inputPassword}>
                        <TextInput
                            secureTextEntry={showPassowrd ? false : true}
                            style={styles.input}
                            placeholder="Senha"
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity hitSlop={{
                            top: widthPercentageToDP('10%'),
                            bottom: widthPercentageToDP('10%'),
                            left: widthPercentageToDP('10%'),
                            right: widthPercentageToDP('10%'),
                        }} onPress={eyeShow} style={styles.buttonEye}>
                            <Feather name={showPassowrd ? 'eye' : 'eye-off'} color={showPassowrd ? "#9C98A6" : '#8257E5'} size={widthPercentageToDP('5%')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.remember}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                        />
                        <Text style={styles.footerText}>Lembrar-me</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                <AwaitButton />

            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;