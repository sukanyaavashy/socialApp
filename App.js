import React,{useEffect}from 'react';
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './src/authentication/LoginScreen';
import Router from './src/router';


import { Provider } from 'react-redux';
import Store from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import persistStore from 'redux-persist/es/persistStore';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

//  let persistor = persistStore(store);


  return (

    <Provider store={Store}>
       <Router/>
      </Provider>





  );
};



export default App;
