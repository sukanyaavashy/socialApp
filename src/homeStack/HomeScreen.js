import React from "react";
import {Text, View, Pressable, StyleSheet,TouchableOpacity} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { color } from "react-native-reanimated";
import { useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeToken } from "../redux/actions";
// import SelectVideoOrYoutube from "./video/VideoHome";


const SelectAudioOrVideo = ({navigation}) =>{

    const dispatch = useDispatch();

    function signOut(){
        const val = AsyncStorage.removeItem('token');
        dispatch(removeToken(val));
    }

    return(
        <View style={{flex:1}}>
            <LinearGradient colors={['#08d4c4', '#B0FFFF', '#48b1bf']} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{flex:1}}>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <LinearGradient colors={['#025669', 'pink', '#025669']}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8 }}>
                        <Pressable style={styles.textContainer} onPress={()=>navigation.navigate('AudioList')}>
                            <Text style={styles.text}>Audio</Text>
                        </Pressable>
                    </LinearGradient>
                    <LinearGradient colors={['#025669', 'pink', '#025669']}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8 }}>
                        <Pressable style={styles.textContainer} onPress={()=>navigation.navigate('VideoHome')}>
                            <Text style={styles.text}>Video</Text>
                        </Pressable>
                    </LinearGradient>
                    <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                      onPress={() => signOut()}


                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                 >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Out</Text>
                </LinearGradient>
                </TouchableOpacity>


            </View>
                </View>

            </LinearGradient>

        </View>
    )
}

export default SelectAudioOrVideo

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontFamily:'Roboto',
        color:'black',
    },
    textContainer:{
        alignItems:"center",
        justifyContent:'center'

    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        width: '100%'
    },
    signIn: {
        // width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:"#fff",
        // padding:30
    },
})