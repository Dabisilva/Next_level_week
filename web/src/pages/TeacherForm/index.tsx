import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './styles.css'
import api from '../../services/api'

function TeacherForm() {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return {...scheduleItem, [field]: value}
            }
            return scheduleItem
        })

       setScheduleItems(updateScheduleItems)
    }

    async function addNewClass(e:FormEvent) {
        e.preventDefault()
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            subject,
            bio,
            cost: Number(cost),
            schedule: scheduleItems

        }).then(() => {
            alert('cadastro feito com sucesso') 
        }).catch( ()=>{
            alert('Erro no cadastro')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={addNewClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            value={name}
                            onChange={e => { setName(e.target.value) }}
                            label="Nome Completo"
                        />
                        <Input
                            name="avatar"
                            value={avatar}
                            onChange={e => { setAvatar(e.target.value) }}
                            label="Avatar"
                        />
                        <Input
                            name="whatsapp"
                            value={whatsapp}
                            onChange={e => { setWhatsapp(e.target.value) }}
                            label="Whatsapp"
                        />
                        <Textarea
                            name="bio"
                            value={bio}
                            onChange={e => { setBio(e.target.value) }}
                            label="Biografia"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>
                        <Select
                            value={subject}
                            name="subject"
                            onChange={e => setSubject(e.target.value)}
                            label="Matéria"
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
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={e => { setCost(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="wee_day"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        label="Dia da Semana"
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
                                        name="from"
                                        value={scheduleItem.from}
                                        label="Das"
                                        type="time"
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        value={scheduleItem.to}
                                        label="Até"
                                        type="time"
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importate" />
                        Importante! <br />
                        preencha todos os dados
                    </p>
                        <button type="submit" >
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm