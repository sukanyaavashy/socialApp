import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './authentication/LoginScreen';
import RegistrationScreen from './authentication/RegistrationScreen';
import HomeScreen from './homeStack/HomeScreen'

import {AudioList} from './homeStack/audio/AudioLIst';
import PlayMusic from './homeStack/audio/PlayMusic';
import SelectAudioOrVideo from './homeStack/HomeScreen';
import SelectVideoOrYoutube from './homeStack/video/VideoHome';
import { VideoList } from './homeStack/video/VideoList';
import PlayVideo from './homeStack/video/PlayVideo';
import VideoPlayer from './homeStack/video/EmbedVideoCode/VideoPlayer';
import YouTubeCode from './homeStack/video/EmbedVideoCode/YouTubeCode';

const Authentication = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false}} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}


const HomeStackNavigation = () =>{
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen name = 'SelectAudioOrVideo' component={SelectAudioOrVideo} options={{headerShown:false}}/>
              <Stack.Screen name = 'AudioList' component={AudioList} />
              <Stack.Screen name='PlayMusic' component={PlayMusic}/>
              <Stack.Screen name='VideoHome' component={SelectVideoOrYoutube}/>
              <Stack.Screen name='PlayVideo' component={PlayVideo}/>
              <Stack.Screen name='VideoList' component={VideoList}/>
              <Stack.Screen name='YouTubeCode' component={YouTubeCode}/>
              <Stack.Screen name='VideoPlayer' component={VideoPlayer}/>

              {/* <Stack.Screen name='VideoList' component={VideoList}/> */}
          </Stack.Navigator>
      </NavigationContainer>
  )
}


export {Authentication, HomeStackNavigation}

const styles = StyleSheet.create({})


