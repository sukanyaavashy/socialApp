import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>

        <Animatable.Image
        animation="bounceIn"
        duraton="1500"
        source={require('../assets/launch_screen.png')}
        style={styles.logo}/>
        <Text style={styles.text_header}>Login</Text>
        </View>
        <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}>
        <Text>Email</Text>
        <View style={styles.inputField}>
        {/* <Icon name='email' size={40}/> */}
        <TextInput
        placeholder="Your Email"/>
        </View>
        </Animatable.View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#009387'
    },
    header:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer:{
        flex:2,
        backgroundColor:"#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20

    },
    logo:{
        height:100,
        width:100,
        borderRadius:30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    inputField:{
        display:"flex",
        flexDirection:"row"

    }

})