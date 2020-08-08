import React, { useState } from 'react'
import { View, Image, Text, Linking, AsyncStorage } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles'
import api from '../../services/api';


export interface Teacher {
    avatar: string
    id: number
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string

}

interface TeacherItemProps {
    classes: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classes, favorited }) => {
    const [isFavorited, setIsFavorites] = useState(favorited)

    async function sendToWhatsapp() {
        api.post('connections', {
            user_id: classes.id
        })
        Linking.openURL(`whatsapp://send?phone=${classes.whatsapp}`);
    }

    async function toggleFavorited() {
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === classes.id
            })

            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorites(false)

        } else {


            favoritesArray.push(classes)

            setIsFavorites(true)
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: classes.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{classes.name}</Text>
                    <Text style={styles.subject}>{classes.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {classes.bio}
            </Text>

            <View style={styles.footer}>

                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R${classes.cost}</Text>
                </Text>

                <View style={styles.buttonContainer}>

                    <RectButton
                        onPress={toggleFavorited}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {}]}

                    >
                        <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton} onPress={sendToWhatsapp}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem