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
import { Provider } from 'react-redux';
import store from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  let persistor = persistStore(store);


  return (

    <Provider store={store}>
       <LoginScreen/>
       </Provider>





  );
};

const styles = StyleSheet.create({

});

export default App;
