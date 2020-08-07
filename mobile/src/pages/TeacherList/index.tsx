import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'

import { widthPercentageToDP } from 'react-native-responsive-screen'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function TeacherList() {
    const [filtersVisible, setFiltersVisible] = useState(false)

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

    async function filterSubmit(){
        const response = await api.get('classes', {
            params: {
                subject, 
                week_day, 
                time
            }
        })

        console.log(response.data)
        setTeachers(response.data)
    }

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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList;