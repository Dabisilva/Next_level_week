import React, { useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from '../contexts/auth'

import AppStack from './AppStack'
import AuthRoutes from './auth.routes'


const Routes: React.FC = () => {
    const {signed} = useContext(AuthContext)
    return signed ? <AppStack/> : <AuthRoutes/>
}

export default Routes