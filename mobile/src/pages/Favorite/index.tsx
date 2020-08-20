import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, AsyncStorage } from 'react-native'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import styles from './styles'

function Favorites(){
    const [favorites, setFavorites] = useState([])

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoriteTeachers = JSON.parse(response)
               

                setFavorites(favoriteTeachers)
            }
        })
    }

    useEffect(()=> {
        loadFavorites()
    },[favorites])
    return(
        <View style={styles.container}>
            <PageHeader subTitle="Estudar" title="Meus proffys fovoritos"/>

            <ScrollView 
                style={styles.teacherList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: widthPercentageToDP('5%'),
                    paddingBottom: widthPercentageToDP('2%')
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            classes={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;