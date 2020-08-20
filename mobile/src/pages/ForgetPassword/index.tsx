import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import BgImage from '../../assets/images/Background.png'
import inicialIcon from '../../assets/images/Intro.png'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const ForgetPassword: React.FC = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')

    function send() {
        navigation.navigate('NewPassword')
    }

    function goBack(){
        navigation.goBack()
    }

    function AwaitButton() {
        if (email.length >= 10) {
            return (
                <RectButton onPress={send} style={styles.enterButtonFilled}>
                    <Text style={styles.enterButtonTextFilled}>Enviar</Text>
                </RectButton>
            )
        } else {
            return (
                <View style={styles.enterButton}>
                    <Text style={styles.enterButtonText}>Enviar</Text>
                </View>
            )
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={BgImage} resizeMode="contain" style={styles.content}>
                    <Image source={inicialIcon} />
                </ImageBackground>
            </View>
            <View >
                <TouchableOpacity onPress={goBack} style={styles.buttonBack}>
                    <Feather name="arrow-left" color="#9C98A6" size={widthPercentageToDP('5%')} />
                </TouchableOpacity>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Esqueceu sua senha?</Text>
                    <Text style={styles.subTitle}>Não esquenta, vamos dar um jeito nisso.</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <AwaitButton />

            </View>
        </ScrollView>
    )
}

export default ForgetPassword;