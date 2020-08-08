import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, Alert, AsyncStorage } from 'react-native'
import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styles from './styles'


function TeacherList() {
    const [filtersVisible, setFiltersVisible] = useState(false)
    const [favorites, setFavorites] = useState<number[]>([])
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [cost, setCost] = useState('')

    function heandleShowFilters() {
        setFiltersVisible(!filtersVisible)
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
            const response = await api.get('classes', {
                params: {
                    week_day,
                    subject,
                    time
                }
            })
            setTeachers(response.data)
            setFiltersVisible(!filtersVisible)
            setSubject('')
            setWeek_day('')
            setTime('')
        }
    }

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoriteTeachers = JSON.parse(response)
                const favoriteTeachersId = favoriteTeachers.map((favoriteTeacher: Teacher) => {
                    return favoriteTeacher.id
                })

                setFavorites(favoriteTeachersId)
            }
        })
    }

    useFocusEffect(()=>{
        loadFavorites()
    })
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={
                <BorderlessButton onPress={heandleShowFilters} >
                    <View style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Filtros</Text>
                        <Feather name="filter" color="#fff" size={widthPercentageToDP('5%')} />
                    </View>
                </BorderlessButton>
            }>
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
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    placeholder="Qual o dia"
                                    placeholderTextColor="#c1bccc"
                                />
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
                        favorited={favorites.includes(teacher.id)}
                    />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;