import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import api from '../../services/api'

import styles from './styles'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import hearticon from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'


function Landing() {
    const navigation = useNavigation()

    const [connections, setConnectios] = useState(0)

    function navigateToClassesPage() {
        navigation.navigate('GiveClasses')
    }

    function navigateToStudyPages() {
        navigation.navigate('Study')
    }
    
    async function getTotalConnections(){
        api.get('connections').then(response => {
            const { total } = response.data
            setConnectios(total)
        })
    }

    useEffect(()=> {
        getTotalConnections()
    }, [])

    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.bunner} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>

                <RectButton
                    onPress={navigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={navigateToClassesPage}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>

            </View>

            <Text style={styles.totalConnections}>
                Total de {connections} conexões já realizadas {' '}
                <Image source={hearticon} />
            </Text>
        </View>
    )
}

export default Landing