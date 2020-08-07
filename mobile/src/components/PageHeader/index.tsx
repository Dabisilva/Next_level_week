import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles';

interface PageHeaderProps {
    title: string,
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
    const navigation = useNavigation()

    function handleBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>

                <BorderlessButton onPress={handleBack}>
                    <Image resizeMode="contain" source={backIcon} />
                </BorderlessButton>

                <Image resizeMode="contain" source={logoImg} />

            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {headerRight}
            </View>
                {children}
        </View>
    )
}

export default PageHeader;