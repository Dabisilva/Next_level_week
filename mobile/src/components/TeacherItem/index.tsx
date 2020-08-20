import React, { useState } from 'react'
import { View, Image, Text, Linking, AsyncStorage, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import userImage from '../../assets/images/usuario.png'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { widthPercentageToDP } from 'react-native-responsive-screen';


export interface Teacher {
    avatar: string
    id: number
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string

}

export interface Schedule {
    week_day: number
    from: number
    to: number
}

interface TeacherItemProps {
    classes: Teacher
    favorited: boolean,
    schedules: Schedule | null
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classes, favorited, schedules }) => {
    const [isFavorited, setIsFavorites] = useState(favorited)
    const { user } = useAuth()

    const [image, setImage] = useState(classes.avatar)
    async function sendToWhatsapp() {
        api.post('connections', {
            user_id: classes.id
        })
        Linking.openURL(`whatsapp://send?phone=${classes.whatsapp}`);
    }

    console.log(schedules)
    async function toggleFavorited() {
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }
        //console.log(classes.id, isFavorited)
        if (isFavorited) {

            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === classes.id
            })

            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorites(false)

            await api.delete(`favorite/del/${user?.id}`).then()
                .catch(() => {
                    setIsFavorites(true)
                })


        } else {
            favoritesArray.push(classes)

            setIsFavorites(true)
            try {
                await api.post(`favorite/${user?.id}`, {
                    favorites: true,
                    teacher_id: classes.id
                })
            } catch {
                setIsFavorites(false)
                Alert.alert(
                    'Não foi possivel salvar esse proffy como favorito',
                    '',
                    [
                        {
                            onPress: () => { },
                            text: 'Ok'
                        }
                    ]
                )
            }


        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
            <Image style={styles.avatar} source={image ? {uri : image} : userImage} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{classes.name}</Text>
                    <Text style={styles.subject}>{classes.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {classes.bio}
            </Text>

            <View style={styles.body}>
                <View style={styles.bodyTitle}>

                    <Text style={styles.textBody}>Dia</Text>
                    <Text style={styles.textBody}>Horário</Text>

                </View>

                <View style={schedules?.week_day === 0 ? styles.itemsSchedule : styles.itemsSchedule2 }>
                    <Text style={schedules?.week_day === 0 ? styles.textSchedule : styles.textSchedule2}>Domingo</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 0 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>

                <View style={schedules?.week_day === 1 ? styles.itemsSchedule : styles.itemsSchedule2}>
                    <Text style={schedules?.week_day === 1 ? styles.textSchedule : styles.textSchedule2}>Segunda</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 1 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>

                <View style={schedules?.week_day === 2 ? styles.itemsSchedule : styles.itemsSchedule2}>
                    <Text style={schedules?.week_day === 2 ? styles.textSchedule : styles.textSchedule2}>Terça</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 2 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>

                <View style={schedules?.week_day === 3 ? styles.itemsSchedule : styles.itemsSchedule2}>
                    <Text style={schedules?.week_day === 3 ? styles.textSchedule : styles.textSchedule2}>Quarta</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 3 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>

                <View style={schedules?.week_day === 4 ? styles.itemsSchedule : styles.itemsSchedule2}>
                    <Text style={schedules?.week_day === 4 ? styles.textSchedule : styles.textSchedule2}>Quinta</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 4 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>

                <View style={schedules?.week_day === 5 ? styles.itemsSchedule : styles.itemsSchedule2}>
                    <Text style={schedules?.week_day === 5 ? styles.textSchedule : styles.textSchedule2}>Sexta</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 5 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>

                <View style={schedules?.week_day === 6 ? styles.itemsSchedule : styles.itemsSchedule2}>
                    <Text style={schedules?.week_day === 6 ? styles.textSchedule : styles.textSchedule2}>Sábado</Text>
                    <Feather name="arrow-right" color="#E6E6F0" size={widthPercentageToDP('5%')} />
                    <Text style={styles.textSchedule}>{schedules?.week_day != 6 ? '' : `${schedules.from / 60}h - ${schedules.to / 60}h`}</Text>
                </View>
            </View>

            <View style={styles.footer}>

                <Text style={styles.price}>
                    Preço da minha hora {'   '}
                    <Text style={styles.priceValue}>
                        R${classes.cost} reais
                    </Text>
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