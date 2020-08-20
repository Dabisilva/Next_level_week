import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, Alert, TouchableOpacity, AsyncStorage, Image, ImageBackground, Picker, FlatList } from 'react-native'
import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { RectButton } from 'react-native-gesture-handler'
import userImage from '../../assets/images/usuario.png'
import BgImage from '../../assets/images/Background.png'
import { useAuth } from '../../contexts/auth'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'

interface Schedule {
    id: number
    week_day: number
    from: number
    to: number
}

function Perfil() {
    const { user, userProffy, schedule, GetDatesProffy, UpdateSignIn } = useAuth()

    const [avatar, setAvatar] = useState(user?.avatar)

    const [week_day, setWeek_day] = useState(0)

    const [edition, setEdition] = useState(false)


    const [subject, setSubject] = useState(userProffy?.subject)

    const [isScheduleItems, setIsScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    const [teste, setTeste] = useState('')

    const [name, setName] = useState(user?.name)
    const [secund_name, setSecund_name] = useState(user?.secund_name)
    const [email, setEmail] = useState(user?.email)
    const [whatsapp, setWhatsapp] = useState(userProffy?.whatsapp)
    const [bio, setBio] = useState(userProffy?.bio)
    const [cost, setCost] = useState(userProffy?.cost)


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = isScheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem
        })

        setIsScheduleItems(updateScheduleItems)
    }

    function numberWeek_dayForString() {

    }

    function addNewScheduleItem() {
        setIsScheduleItems([
            ...isScheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function deleteHour(id: any) {
        try {
            api.delete(`schedule/del/${id}`)

            GetDatesProffy()
        } catch (err) {
            console.log(err)
        }
    }


    function edit() {
        setEdition(!edition)
    }

    async function getPermissions() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            Alert.alert(
                "Desculpe precisamos de sua autorização para poder acessar a galeria",
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

    const NotHours: React.FC = () => {
        if (!schedule) {
            return (
                <>
                    <View>
                        <Text style={styles.label}>     Você não tem horarios disponíveis!!</Text>
                    </View>
                </>
            )
        } else {
            return <></>
        }
    }

    async function pickImage() {
        getPermissions()
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                return setAvatar(result.uri);
            } else {
                return setAvatar(userImage)
            };
        } catch (E) {
        }
    }

    async function updatePerfil() {

        try {
            const response = await api.patch(`/update/${user?.id}`, {
                name,
                secund_name,
                email,
                avatar,
                whatsapp,
                bio,
                subject,
                cost,
                schedule: isScheduleItems
            })
            Alert.alert(
                "Dados editados",
                "",
                [
                    {
                        text: "",
                        onPress: () => { },
                        style: "cancel"
                    },
                    { text: "Ok", onPress: () => { } }
                ],
                { cancelable: false }
            );
            GetDatesProffy()
            setEdition(false)
            UpdateSignIn(String(email), String(user?.password))

        } catch (err) {
            Alert.alert(
                "Não foi possivel salvar as alterações",
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

    useEffect(() => {
        GetDatesProffy()
    }, [edition])

    return (
        <View style={styles.container}>
            <PageHeader subTitle="Meu Perfil">
                <ImageBackground source={BgImage} resizeMode="contain" style={styles.content}>
                    <Image style={styles.image} source={avatar ? { uri: avatar } : userImage} />

                    {edition && (
                        <RectButton onPress={pickImage} style={styles.camera}>
                            <Feather name="camera" color="#fff" size={widthPercentageToDP('7%')} />
                        </RectButton>
                    )}
                </ImageBackground>

            </PageHeader>

            <ScrollView
                style={styles.datesPerfil}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: widthPercentageToDP('5%'),
                    paddingBottom: widthPercentageToDP('2%')
                }}
            >
                {!edition && (
                    <>
                        <View style={styles.header}>
                            <Text style={styles.subTitle}>Seus dados</Text>

                            <RectButton onPress={edit}>
                                <Feather name="edit-2" color="#32264D" size={widthPercentageToDP('4%')} />
                            </RectButton>
                        </View>

                        <View style={styles.searchForm}>

                            <Text style={styles.label}>Nome</Text>
                            <Text style={styles.userDates}>{name}</Text>

                            <Text style={styles.label}>Sobrenome</Text>
                            <Text style={styles.userDates}>{secund_name}</Text>

                            <Text style={styles.label}>E-mail</Text>
                            <Text style={styles.userDates}>{email}</Text>

                            <Text style={styles.label}>Whatsapp</Text>
                            <Text style={styles.userDates}>{whatsapp ? whatsapp : 'Vazio'}</Text>

                            <Text style={styles.label}>Bio</Text>
                            <Text style={styles.userDates}>{bio ? bio : 'Vazio'}</Text>

                            <Text style={styles.subTitle}>Sobre a Aula</Text>

                            <Text style={styles.label}>Matéria</Text>
                            <Text style={styles.userDates}>{subject ? subject : 'Vazio'}</Text>

                            <Text style={styles.label}>Custo da sua aula por hora</Text>
                            <Text style={styles.userDates}>{cost ? cost : 'Vazio'}</Text>

                            <View style={styles.schedule}>
                                <Text style={styles.subTitleFooter}>Horários disponíveis</Text>
                            </View>

                            {schedule?.map((scheduleItem, index) => {
                                let week_day = ''
                                switch (scheduleItem.week_day) {
                                    case 0:
                                        week_day = 'Domingo'
                                        break;

                                    case 1:
                                        week_day = 'Segunda-feira'
                                        break;

                                    case 2:
                                        week_day = 'Terça-feira'
                                        break;

                                    case 3:
                                        week_day = 'Quarta-feira'
                                        break;

                                    case 4:
                                        week_day = 'Quinta-feira'
                                        break;

                                    case 5:
                                        week_day = 'Sexta-feira'
                                        break;

                                    case 6:
                                        week_day = 'Sábado'
                                        break;

                                    default:
                                        break;
                                }
                                return (
                                    <>
                                        <Text key={scheduleItem.id} style={styles.label}>Dia da semana</Text>
                                        <Text style={styles.userDates}>{scheduleItem ? week_day : 'Vazio'}</Text>

                                        <View style={styles.inputGroup}>
                                            <View style={styles.inputBlock}>
                                                <Text style={styles.label}>Das</Text>
                                                <Text style={styles.userDates}>{scheduleItem ? `${scheduleItem.from / 60} horas` : '00:00'}</Text>
                                            </View>

                                            <View style={styles.inputBlock}>
                                                <Text style={styles.label}>Até</Text>
                                                <Text style={styles.userDates}>{scheduleItem ? `${scheduleItem.to / 60} horas` : '00:00'}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => deleteHour(scheduleItem.id)}>
                                            <Text style={styles.deleteSchedule}>Excluir horário</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            })}
                            <NotHours />

                        </View>
                    </>
                )}
                {edition && (
                    <>
                        <View style={styles.header}>
                            <Text style={styles.subTitle}>Seus dados</Text>

                            <TouchableOpacity onPress={edit}>
                                <Text style={styles.cancel}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={text => setName(text)}
                                placeholderTextColor="#c1bccc"
                            />
                            <Text style={styles.label}>Sobrenome</Text>
                            <TextInput
                                style={styles.input}
                                value={secund_name}
                                onChangeText={text => setSecund_name(text)}
                                placeholderTextColor="#c1bccc"
                            />

                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={text => setEmail(text)}
                                placeholderTextColor="#c1bccc"
                            />

                            <Text style={styles.label}>Whatsapp</Text>
                            <TextInput
                                style={styles.input}
                                value={whatsapp}
                                onChangeText={text => setWhatsapp(text)}
                                placeholderTextColor="#c1bccc"
                            />

                            <Text style={styles.label}>Bio</Text>
                            <TextInput
                                style={styles.input}
                                value={bio}
                                multiline={true}
                                onChangeText={text => setBio(text)}
                                placeholderTextColor="#c1bccc"
                            />

                            <Text style={styles.subTitle}>Sobre a Aula</Text>

                            <Text style={styles.label}>Matéria</Text>
                            <TextInput
                                style={styles.input}
                                value={subject}
                                onChangeText={text => setSubject(text)}
                                placeholderTextColor="#c1bccc"
                            />
                            <Text style={styles.label}>Custo da sua aula por hora</Text>
                            <TextInput
                                style={styles.input}
                                value={cost}
                                onChangeText={text => setCost(text)}
                                placeholderTextColor="#c1bccc"
                            />

                            <View style={styles.schedule}>
                                <Text style={styles.subTitleFooter}>Horários disponíveis</Text>

                                <TouchableOpacity onPress={addNewScheduleItem} activeOpacity={0.5}>
                                    <Text style={styles.newSchedule}>+ Novo</Text>
                                </TouchableOpacity>
                            </View>

                            {isScheduleItems.map((isSchedule, index) => {
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


                            <View style={styles.footerButton}>
                                <RectButton onPress={updatePerfil} style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>Salvar alterações</Text>
                                </RectButton>
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
        </View>
    )
}

export default Perfil;