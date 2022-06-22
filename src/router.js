import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './authentication/LoginScreen';
import RegistrationScreen from './authentication/RegistrationScreen';
import HomeScreen from './homeStack/HomeScreen'


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default Router

const styles = StyleSheet.create({})


