import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import HeaderCreateAccount from '../../components/HeaderCreateAccount'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

function CreateAccount() {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [secund_name, setSecund_name] = useState('')

    function goNext() {
        navigation.navigate('EmailPassword', {name, secund_name})
    }
    function AwaitButton() {
        if (name.length >= 3 && secund_name.length >= 3) {
            return (
                <RectButton onPress={goNext} style={styles.enterButtonFilled}>
                    <Text style={styles.enterButtonTextFilled}>Próximo</Text>
                </RectButton>
            )
        } else {
            return (
                <View style={styles.enterButton}>
                    <Text style={styles.enterButtonText}>Próximo</Text>
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
            <HeaderCreateAccount />

            <View style={styles.titleHeader}>
                <Text style={styles.title}>Crie sua conta gratuíta</Text>

                <Text style={styles.secundTitle}>Basta preencher esses dados e você estará conosco.</Text>
            </View>


            <Text style={styles.titleForm}>01. Quem é você?</Text>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input1}
                    placeholder="Nome"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={secund_name}
                    onChangeText={text => setSecund_name(text)}
                />

                <AwaitButton />

            </View>
        </View>
    )
}

export default CreateAccount