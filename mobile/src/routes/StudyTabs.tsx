import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorite';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const { Navigator, Screen } = createBottomTabNavigator()

function StudyButtons() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: widthPercentageToDP('15%')
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: widthPercentageToDP('10%'),
                    height: widthPercentageToDP('10%')
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: widthPercentageToDP('3%'),
                    marginLeft: widthPercentageToDP('2%')
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Ionicons name='ios-easel' color={focused ? '#8257e5' : color} size={size}/>
                    }
                }}
                name="TeacherList"
                component={TeacherList}
            />
            <Screen
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Ionicons name='ios-heart' color={focused ? '#8257e5' : color} size={size}/>
                    }
                }}
                name="Favorites"
                component={Favorites}
            />
        </Navigator>
    )
}

export default StudyButtons