import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles';

interface PageHeaderProps {
    title?: string
    text?: string
    subTitle: string
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, text, children, subTitle }) => {
    const navigation = useNavigation()

    function handleBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.border}>

                <View style={styles.topBar}>
                    <BorderlessButton onPress={handleBack}>
                        <Image resizeMode="contain" source={backIcon} />
                    </BorderlessButton>
                    <Text style={styles.textTitle}>{subTitle}</Text>
                    <Image resizeMode="contain" source={logoImg} />
                </View>

            </View>

            <View style={headerRight ? styles.headerHorizontal : styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    )
}

export default PageHeader;