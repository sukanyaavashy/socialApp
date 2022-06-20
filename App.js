import React,{useEffect}from 'react';
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './src/authentication/LoginScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <LoginScreen/>
  );
};

const styles = StyleSheet.create({

});

export default App;
