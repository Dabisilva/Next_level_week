import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import HeaderCreateAccount from '../../components/HeaderCreateAccount'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'

import styles from './styles'

function EmailPassowrd() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassowrd, setShowpassord] = useState(false);
    const route = useRoute()

    const name = route.params.name
    const secund_name = route.params.secund_name
    
    function eyeShow() {
        setShowpassord(!showPassowrd)
    }

    function AwaitButton() {
        if (password.length >= 8 && email.length >= 10) {
            return (
                <RectButton onPress={finishRegister} style={styles.enterButtonFilled}>
                    <Text style={styles.enterButtonTextFilled}>Concluír cadastro</Text>
                </RectButton>
            )
        } else {
            return (
                <View style={styles.enterButton}>
                    <Text style={styles.enterButtonText}>Concluír cadastro</Text>
                </View>
            )
        }
    }

    async function finishRegister() {
        const params = {
            email,
            password,
            name,
            secund_name,
        }
        console.log(params)
        // const response = await api.post('register', {
        //     email,
        //     password,
        //     name,
        //     secund_name,
        // }).then(() => {
            navigation.navigate('SucessRegister')
        // }).catch(()=>{ 
        //     Alert.alert(
        //         'Erro no cadastro',
        //         '',
        //         [
        //             {
        //                 text: 'tentar novamente',
        //                 onPress: () => {},
        //                 style: 'cancel'
        //             }
        //         ]
        //     )
        // })
        // console.log(response)
        // return response
    }

    return (
        <View style={styles.container}>
            <HeaderCreateAccount />

            <View style={styles.titleHeader}>
                <Text style={styles.title}>Crie sua conta gratuíta</Text>

                <Text style={styles.secundTitle}>Basta preencher esses dados e você estará conosco.</Text>
            </View>


            <Text style={styles.titleForm}>02. Email e Senha</Text>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input1}
                    placeholder="E-mail"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    keyboardType="email-address"
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

                <AwaitButton />

            </View>
        </View>
    )
}

export default EmailPassowrd