import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'
import { Alert, AsyncStorage } from 'react-native'
interface AuthContextData {
    signed: boolean;
    user: object | null;
    SignIn(
        email: string,
        password: string
    ): Promise<void>
    SignOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null)

    async function loadStorage() {
        const tokenUser = AsyncStorage.getItem('@ProffyAuth:token')
        const storageuser = AsyncStorage.getItem('@ProffyAuth:user')

        if ( storageuser && tokenUser) {
            console.log(tokenUser)
            setUser(storageuser)
        }
    }

    useEffect(() => {
        loadStorage()
    }, [])

    async function SignIn(email: string, password: string) {

        await api.post('session', {
            email,
            password
        }).then(response => {
            console.log(response.data)
            setUser(response.data.user)
            AsyncStorage.setItem('@ProffyAuth:token', response.data.token)
            AsyncStorage.setItem('@ProffyAuth:user', JSON.stringify(response.data.user))

        }).catch(() => {
            Alert.alert(
                'Dados incorretos',
                '',
                [
                    {
                        text: 'Tentar novamente',
                        onPress: () => {},
                        style: 'cancel'
                    }
                ]
            )
        })
    }

    function SignOut(){
        AsyncStorage.clear().then(() => {
            setUser(null)
        }).catch((err)=> {
            console.log(err)
        })
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext