import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../contexts/auth'

import AppStack from './AppStack'
import AuthRoutes from './auth.routes'


const Routes: React.FC = () => {
    const {signed} = useAuth()
    return signed ? <AppStack/> : <AuthRoutes/>
}

export default Routes