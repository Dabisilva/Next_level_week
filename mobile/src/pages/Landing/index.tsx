import React, { useState, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, Image, AsyncStorage } from 'react-native'
import api from '../../services/api'
import { Feather } from '@expo/vector-icons'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import hearticon from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import userImage from '../../assets/images/usuario.png'
import { RectButton } from 'react-native-gesture-handler'
import AuthContext from '../../contexts/auth'

import styles from './styles'
import { widthPercentageToDP } from 'react-native-responsive-screen'

function Landing() {
    const navigation = useNavigation()
    const { SignOut, user, signed } = useContext(AuthContext)
    const [connections, setConnections] = useState(0)

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
        const userDatas = AsyncStorage.getItem('@ProffyAuth:user')
        console.log({signed, userDatas})
    })

    return (
        <View style={styles.container}>
                <View style={styles.headerUser}>
                    <View style={styles.datesUser}>
                        <Image source={userImage} />
                        <Text style={styles.nameUser}>{`${user.name} ${user.secund_name}`}</Text>
                    </View>
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