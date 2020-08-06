import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'
import api from '../../services/api'

function TeacherList() {
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [cost, setCost] = useState('')

    async function searchTeacher(e:FormEvent){
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                week_day, 
                subject, 
                time
            }
        })
        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form onSubmit={searchTeacher} action="" id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Bilogia', label: 'Bilogia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="wee_day"
                        value={week_day}
                        label="Dia da Semana"
                        onChange={e => { setWeek_day(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        onChange={e => { setTime(e.target.value) }}
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} classes={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList