
import React,{useEffect}from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector,useDispatch} from "react-redux";
import { Store } from "./src/redux/store";
import { getToken } from "./src/redux/actions";
import { Provider } from 'react-redux';
import {Authentication} from "./src/router";
import { HomeStackNavigation } from "./src/router";
import SplashScreen from 'react-native-splash-screen'

const AppWrapper = () => {
  const storeData = useSelector((state) => state)
  const token = storeData.userReducer.token;
  const uid = storeData.userReducer.uid
  const dispatch = useDispatch();

  useEffect(()=>{
    getData();
  });

  const getData = async () => {
    const val = await AsyncStorage.getItem('token');
    if (val !== '') {
      dispatch(getToken(val));
    }
  };

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },1000)

  },)

  if (token){
    return(
      <HomeStackNavigation/>
    )
  }
  return(
    <Authentication/>
  )


}

const App = () => {

  return (
    <Provider store={Store}>
      <AppWrapper />
    </Provider>
  )
}

export default App;
