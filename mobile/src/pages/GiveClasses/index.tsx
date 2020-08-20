import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, Alert, TouchableOpacity, AsyncStorage, Image, Picker } from 'react-native'
import api from '../../services/api'
import userImage from '../../assets/images/usuario.png'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { useAuth } from '../../contexts/auth'

import styles from './styles'


function Perfil() {
    const { user, GetDatesProffy } = useAuth()
    const [filtersVisible, setFiltersVisible] = useState(false)
    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState(0)
    const [time, setTime] = useState('')
    const [firstTime, setFirstTime] = useState('')
    const [lastTime, setlastTime] = useState('')

    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [cost, setCost] = useState('')

    const [schedule, setSchedule] = useState([
        { week_day: 0, from: '', to: '' }
    ])
    function heandleShowFilters() {
        setFiltersVisible(!filtersVisible)
    }

    async function CreateClasss() {
        try {
            await api.post(`classes/${user?.id}`, {
                name: user?.name,
                whatsapp,
                bio,
                avatar: user?.avatar,
                subject,
                cost,
                schedule
            })

            GetDatesProffy()
            Alert.alert(
                "Dados salvos com sucesso",
                "",
                [
                    {
                        text: "",
                        onPress: () => { },
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => { } }
                ],
                { cancelable: false }
            );
        }catch(err){
            Alert.alert(
                "Desculpe não foi possivel salvar os dados",
                "",
                [
                    {
                        text: "",
                        onPress: () => { },
                        style: "cancel"
                    },
                    { text: "Tentar novamente", onPress: () => { } }
                ],
                { cancelable: false }
            );
        }
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = schedule.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem
        })

        setSchedule(updateScheduleItems)
    }

    function addNewScheduleItem() {
        setSchedule([
            ...schedule,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {

        })
    }

    useFocusEffect(() => {
        //loadFavorites()
    })
    return (
        <View style={styles.container}>
            <PageHeader
                title="Que incrível que você quer dar aulas."
                subTitle="Dar aulas"
                text="O primeiro passo, é preencher esse formulário de inscrição."
            />

            <ScrollView
                style={styles.datesPerfil}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: widthPercentageToDP('5%'),
                    paddingBottom: widthPercentageToDP('2%')
                }}
            >

                <Text style={styles.subTitle}>Seus dados</Text>

                <View style={styles.searchForm}>
                    <View style={styles.profile}>
                        <Image
                            style={styles.avatar}
                            source={userImage}
                        />

                        <View style={styles.profileInfo}>
                            <Text style={styles.name}>{`${user?.name} ${user?.secund_name}`}</Text>
                        </View>
                    </View>

                    <Text style={styles.label}>Whatsapp</Text>
                    <TextInput
                        style={styles.input}
                        value={whatsapp}
                        keyboardType="number-pad"
                        onChangeText={text => setWhatsapp(text)}
                        placeholder="Número"
                        placeholderTextColor="#c1bccc"
                    />

                    <Text style={styles.label}>Bio</Text>
                    <TextInput
                        style={styles.input}
                        value={bio}
                        multiline={true}
                        onChangeText={text => setBio(text)}
                        placeholder="..."
                        placeholderTextColor="#c1bccc"
                    />

                    <Text style={styles.subTitle}>Sobre a Aula</Text>

                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a matéria"
                        placeholderTextColor="#c1bccc"
                    />
                    <Text style={styles.label}>Custo da sua aula por hora</Text>
                    <TextInput
                        style={styles.input}
                        value={cost}
                        keyboardType="number-pad"
                        onChangeText={text => setCost(text)}
                        placeholder="R$00,00"
                        placeholderTextColor="#c1bccc"
                    />

                    <View style={styles.schedule}>
                        <Text style={styles.subTitleFooter}>Horários disponíveis</Text>
                        <TouchableOpacity onPress={addNewScheduleItem} activeOpacity={0.5}>
                            <Text style={styles.newSchedule}>+ Novo</Text>
                        </TouchableOpacity>
                    </View>

                    {schedule.map((isSchedule, index) => {
                        return (
                            <>
                                <Text key={index} style={styles.label}>Dia da semana</Text>
                                <View style={styles.input}>
                                    <Picker
                                        style={[styles.label, { marginTop: widthPercentageToDP('-1%') }]}
                                        selectedValue={week_day}
                                        mode="dropdown"
                                        onValueChange={(itemValue, itemIndex) => setWeek_day(itemValue)}
                                    >
                                        <Picker.Item label="Domingo" value={0} />
                                        <Picker.Item label="Segunda-feira" value={1} />
                                        <Picker.Item label="Terça-feira" value={2} />
                                        <Picker.Item label="Quarta-feira" value={3} />
                                        <Picker.Item label="Quinta-feira" value={4} />
                                        <Picker.Item label="Sexta-feira" value={5} />
                                        <Picker.Item label="Sábado" value={6} />
                                    </Picker>
                                </View>

                                <View style={styles.inputGroup}>
                                    <View style={styles.inputBlock}>
                                        <Text style={styles.label}>Das</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={isSchedule.from}
                                            placeholder="00:00"
                                            onChangeText={text => setScheduleItemValue(index, 'from', text)}
                                            placeholderTextColor="#c1bccc"
                                        />
                                    </View>

                                    <View style={styles.inputBlock}>
                                        <Text style={styles.label}>Até</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={isSchedule.to}
                                            placeholder="00:00"
                                            onChangeText={text => setScheduleItemValue(index, 'to', text)}
                                            placeholderTextColor="#c1bccc"
                                        />
                                    </View>

                                </View>
                            </>
                        )
                    })}
                    <TouchableOpacity>
                        <Text style={styles.deleteSchedule}>Excluir horário</Text>
                    </TouchableOpacity>

                    <View style={styles.footerButton}>
                        <RectButton onPress={CreateClasss} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Salvar alterações</Text>
                        </RectButton>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Perfil;