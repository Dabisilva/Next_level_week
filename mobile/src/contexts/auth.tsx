import React, { createContext, useState, useEffect, useContext } from 'react'
import api from '../services/api'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'

interface User {
    id: number
    name: string
    secund_name: string,
    avatar: string
    email: string
    password: string
}

interface userProffy {
    bio: string
    whatsapp: string
    subject: string
    cost: string
}

interface AuthContextData {
    rem: boolean
    signed: boolean;
    user: User | null;
    userProffy: userProffy | null
    schedule: Array<{
        id: number
        week_day: number
        from: number
        to: number
    }>| null
    Remember(
        remem: boolean
    ): void
    SignIn(
        email: string,
        password: string
    ): Promise<void>
    UpdateSignIn(
        email: string,
        password: string
    ): Promise<void>
    SignOut(): void
    GetDatesProffy(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [userProffy, setUserProffy] = useState<userProffy | null>(null)
    const [schedule, setSchedule] = useState< Array<{
        id: number
        week_day: number
        from: number
        to: number
    }>| null> (null)
    const [rememberMe, setRememberMe] = useState(false)


    async function loadStorage() {
        const userToken = await AsyncStorage.getItem('@ProffyAuth:token')
        const getStorageUser = await AsyncStorage.getItem('@ProffyAuth:user')
        const getProffyDate = await AsyncStorage.getItem('@Proffy:proffy')
        const getSchedule = await AsyncStorage.getItem('@Proffy:schedule')

        const proffyDate = JSON.parse(String(getProffyDate))

        const userData = JSON.parse(String(getStorageUser))

        const proffySchedules = JSON.parse(String(getSchedule))
        
        setUserProffy(proffyDate)
        setSchedule(proffySchedules)

        if (userData && userToken) {
            api.defaults.headers['Authorization'] = `Bearer ${userToken}`
            setUser(userData)
        }
    }

    function Remember(remem: boolean) {
        setRememberMe(remem)
    }

    useEffect(() => {
        //if(rememberMe){
        GetDatesProffy()
        loadStorage()
        //}
    }, [])

    async function GetDatesProffy() {
        await api.get(`proffy/${user?.id}`)
            .then(response => {
                setUserProffy(response.data.proffy)

                const proffyDates = JSON.stringify(response.data.proffy)

                AsyncStorage.setItem('@Proffy:proffy', proffyDates)
            })

        await api.get(`schedule/${user?.id}`)
            .then(response => {
                setSchedule(response.data.schedule)
                const setScheduleStorage = JSON.stringify(response.data.schedule)

                AsyncStorage.setItem('@Proffy:schedule', setScheduleStorage)
            })
    }

    async function SignIn(email: string, password: string) {

        await api.post('session', {
            email,
            password
        }).then(response => {

            setUser(response.data.user)
            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
            const userDates = JSON.stringify(response.data.user)
            const userToken = JSON.stringify(response.data.token)

            AsyncStorage.setItem('@ProffyAuth:token', userToken)
            AsyncStorage.setItem('@ProffyAuth:user', userDates)


        }).catch(() => {
            Alert.alert(
                'Dados incorretos',
                '',
                [
                    {
                        text: 'Tentar novamente',
                        onPress: () => { },
                        style: 'cancel'
                    }
                ]
            )
        })
    }
    
    async function UpdateSignIn(email: string, password: string) {

        await api.post('session', {
            email,
            password
        }).then(response => {

            setUser(response.data.user)
            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
            const userDates = JSON.stringify(response.data.user)
            const userToken = JSON.stringify(response.data.token)
            
            AsyncStorage.setItem('@ProffyAuth:token', userToken)
            AsyncStorage.setItem('@ProffyAuth:user', userDates)


        }).catch(() => {
           
        })
    }

    function SignOut() {
        Alert.alert(
            'Deseja deslogar?', '',
            [
                {
                    text: 'cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        AsyncStorage.clear().then(() => {
                            setUser(null)
                        }).catch((err) => {
                            console.log(err)
                        })
                    },
                    style: 'destructive'
                }
            ]
        )
    }
    return (
        <AuthContext.Provider value={{
            signed: !!user,
            UpdateSignIn,
            user,
            GetDatesProffy,
            userProffy,
            schedule,
            SignIn,
            SignOut,
            Remember,
            rem: rememberMe
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}