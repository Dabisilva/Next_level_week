import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import api from '../../services/api'
import { Feather } from '@expo/vector-icons'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import hearticon from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import userImage from '../../assets/images/usuario.png'
import { RectButton } from 'react-native-gesture-handler'
import {useAuth} from '../../contexts/auth'

import { widthPercentageToDP } from 'react-native-responsive-screen'
import styles from './styles'

function Landing() {
    const { SignOut, user } = useAuth()

    const [image, setImage] = useState(user?.avatar)
    const navigation = useNavigation()
    const [connections, setConnections] = useState(0)
    
    function navigationPerfilPage(){
        navigation.navigate('Perfil')
    }
    
    function navigateToClassesPage() {
        navigation.navigate('GiveClasses')
    }

    function navigateToStudyPages() {
        navigation.navigate('Study')
    }

    async function getTotalConnections() {
        api.get('connections').then(response => {
            const { total } = response.data
            setConnections(total)
        })
    }

    function LogOut(){
        SignOut()
    }

    useFocusEffect(() => {
        getTotalConnections()    
    })

    return (
        <View style={styles.container}>
                <View style={styles.headerUser}>
                    <TouchableOpacity onPress={navigationPerfilPage} activeOpacity={0.8} style={styles.datesUser}>
                        <Image style={styles.image} source={image ? {uri : image} : userImage} />
                        <Text style={styles.nameUser}>{`${user?.name} ${user?.secund_name}`}</Text>
                    </TouchableOpacity>
                    <RectButton onPress={LogOut} style={styles.logoutButton}>
                        <Feather name="power" color="#D4C2FF" size={widthPercentageToDP('6%')} />
                    </RectButton>
                </View>
                <Image source={landingImage} style={styles.bunner} />

            <View style={styles.body}>
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
        </View>
    )
}

export default Landing