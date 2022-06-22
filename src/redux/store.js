
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import thunk from 'redux-thunk'
// import { combineReducers } from 'redux';
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import { tokenReducer } from './reducer';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import hardSet from 'redux-persist/es/stateReconciler/hardSet';
// import storage from './storage';

// const persistConfig = {
//     key: 'counter',
//     storage: storage,

// };



// const persistedReducer = persistReducer(persistConfig, tokenReducer);


// export default configureStore({
//     reducer: tokenReducer
// });


import {createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";

const rootReducer=combineReducers({userReducer});

export const Store=createStore(rootReducer,applyMiddleware(thunk));