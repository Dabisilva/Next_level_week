import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, Alert, AsyncStorage, Image, Picker } from 'react-native'
import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import teacherEmoji from '../../assets/images/Encontrado.png'
import { useFocusEffect } from '@react-navigation/native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { useAuth } from '../../contexts/auth'

import styles from './styles'


interface Schedule{
    week_day: number
    from: number
    to: number
}

interface ScheduleProps {
    scheduleItems: Schedule
}

const TeacherList: React.FC<ScheduleProps> = ({scheduleItems}) => {
    const { user, userProffy } = useAuth()
    const [filtersVisible, setFiltersVisible] = useState(false)
    const [favorites, setFavorites] = useState<number[]>([])
    const [teachers, setTeachers] = useState([])
    const [totalProffy, setTotalProffy] = useState(0)

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState(0)
    const [time, setTime] = useState('')

    const [schedules, setSchedules] = useState(scheduleItems)

    function heandleShowFilters() {
        setFiltersVisible(!filtersVisible)
    }
    
    async function getTotalProffy() {
        const response = await api.get('proffys')
        setTotalProffy(response.data.total)
    }

    async function filterSubmit() {
        loadFavorites()
        if (subject && week_day && time === '') {
            Alert.alert(
                "Preencha os campos",
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
        } else {
            try {
                const response = await api.get('classes', {
                    params: {
                        week_day,
                        subject,
                        time
                    }
                })
                console.log(response.data.schedules[0])
                setTeachers(response.data.classes)
                setSchedules(response.data.schedules[0])
                setFiltersVisible(!filtersVisible)
                setSubject('')
                setWeek_day(0)
                setTime('')
            } catch (err){
                Alert.alert(
                    "Não possuimos nenhum professor com esses horários",
                    "",
                    [
                        {
                            text: "",
                            onPress: () => { },
                            style: "cancel"
                        },
                        { text: "oK", onPress: () => { } }
                    ],
                    { cancelable: false }
                );
            }

        }
    }
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoriteTeachers = JSON.parse(response)
                const favoriteTeachersId = favoriteTeachers.map((favoriteTeacher: Teacher) => {
                    return favoriteTeacher.id
                })

                setFavorites(favoriteTeachersId)
            }
        })
    }

    useFocusEffect(() => {
        getTotalProffy()
        loadFavorites()
    })
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" subTitle="Estudar" headerRight={
                <>
                    <View style={styles.totalProffy}>
                        <Image source={teacherEmoji} />
                        <Text style={styles.textTotalProffy}>  {totalProffy} proffys</Text>
                    </View>
                </>
            }>
                <RectButton style={styles.filterButton} onPress={heandleShowFilters} >

                    <Feather name="filter" color="#04D361" size={widthPercentageToDP('5%')} />
                    <Text style={styles.filterButtonText}> Filtrar por dia, hora e matéria</Text>

                </RectButton>
                {filtersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria </Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana </Text>
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
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual horário"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton onPress={filterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: widthPercentageToDP('5%'),
                    paddingBottom: widthPercentageToDP('2%')
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            classes={teacher}
                            schedules={schedules}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;