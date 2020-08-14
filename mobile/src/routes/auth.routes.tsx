import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import EmailPassowrd from '../pages/EmailPassword'
import RegisterCompleted from '../pages/ResgisterCompleted'

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="CreateAccount" component={CreateAccount}/>
            <AuthStack.Screen name="EmailPassword" component={EmailPassowrd}/>
            <AuthStack.Screen name="SucessRegister" component={RegisterCompleted}/>
        </AuthStack.Navigator>
    )
}

export default AuthRoutes