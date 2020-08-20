import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyButtons from './StudyTabs'
import Perfil from '../pages/Perfil'

const {
    Navigator,
    Screen
} = createStackNavigator()

function AppStack() {
    return (
        <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
            <Screen name="Landing" component={Landing} />
            <Screen name="GiveClasses" component={GiveClasses} />
            <Screen name="Study" component={StudyButtons} />
            <Screen name="Perfil" component={Perfil} />
        </Navigator>
    )
}

export default AppStack