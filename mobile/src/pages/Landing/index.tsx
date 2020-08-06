import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import landingImage from '../../assets/images/landing.png'

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.bunner}/>
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
        </View>
    )
}

export default Landing