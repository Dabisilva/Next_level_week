import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import styles from './styles'

function Favorites(){
    return(
        <View style={styles.container}>
            <PageHeader title="Meus proffys fovoritos"/>

            <ScrollView 
                style={styles.teacherList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: widthPercentageToDP('5%'),
                    paddingBottom: widthPercentageToDP('2%')
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default Favorites;