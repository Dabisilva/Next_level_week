import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, Archivo_600SemiBold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fonstLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })
  if (!fonstLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
            <StatusBar style='light' />
          </AuthProvider>
        </NavigationContainer>
      </>
    );
  }
}
