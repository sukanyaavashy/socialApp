// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const RegistrationScreen = () => {
//   return (
//     <View>
//       <Text>RegistrationScreen</Text>
//     </View>
//   )
// }

// export default RegistrationScreen

// const styles = StyleSheet.create({})



import LinearGradient from 'react-native-linear-gradient';
import React,{useId, useState} from 'react';
import { StyleSheet, View, Text,Dimensions,Image,TextInput,Pressable,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import {useSelector,useDispatch, Provider} from "react-redux";
import {getUserUid} from "./Src/redux/actions";


function RegistrationScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname,SetFname]=useState("");
    const [sname,SetSname]=useState("");
    const [number,SetNumber]=useState("");
    const [cp,SetCp]=useState("")
    const uid=useSelector(state=>state.userReducer);

    const NewUser=async(email, password) =>{
        if(password!==cp){
            return Alert.alert("Passwords don't match.")
        }

        else {
          try{
            await auth().createUserWithEmailAndPassword(email,password).then(
              function(res){
                res.user.updateProfile({displayName:fname+" "+sname,phoneNumber:number})
              }
            )
        }
       catch(e){
          if (e.code === "auth/invalid-email") {
            return (Alert.alert("Enter valid email"));
          } else if (e.code === "auth/weak-password") {
            return (Alert.alert("Password is short"));
          } else if (e.code === "auth/email-already-in-use") {
            return (Alert.alert("email-already-in-use"));
          } else {
            return (console.log(e.message));
          }

       };
        }

    }

    return(
      <View style={styles.container}>
          <LinearGradient
              colors={["#ffd89b", "#19547b"]}
              style={styles.linearGradient}
              >
              <View style={{justifyContent:"center",alignItems:"center"}}>

                  <View style={{marginTop:10,backgroundColor:"white",flexDirection:"row",width: 300,borderRadius: 6,borderWidth: 2,borderColor: '#ffffff',}}>
                      < Icon style={{padding: 10}} name="person" size={30} color="black" />
                      <TextInput
                      style={styles.input}
                      value={fname}
                      onChangeText={SetFname}
                      placeholder="First name"
                      keyboardType='ascii-capable'
                      autoCompleteType='off'
                      />
                  </View>

                  <View style={{marginTop:5,backgroundColor:"white",flexDirection:"row",width: 300,borderRadius: 6,borderWidth: 2,borderColor: '#ffffff',}}>
                      < Icon style={{padding: 10}} name="person" size={30} color="black" />
                      <TextInput
                      style={styles.input}
                      value={sname}
                      onChangeText={SetSname}
                      placeholder="Second name"
                      keyboardType='ascii-capable'
                      autoCompleteType='off'
                      />
                  </View>

                  <View style={{marginTop:5,backgroundColor:"white",flexDirection:"row",width: 300,borderRadius: 6,borderWidth: 2,borderColor: '#ffffff',}}>
                      < Icon style={{padding: 10}} name="phone" size={30} color="black" />
                      <TextInput
                      style={styles.input}
                      value={number}
                      onChangeText={SetNumber}
                      placeholder="Phone number"
                      keyboardType='ascii-capable'
                      autoCompleteType='off'
                      />
                  </View>

                  <View style={{marginTop:5,backgroundColor:"white",flexDirection:"row",width: 300,borderRadius: 6,borderWidth: 2,borderColor: '#ffffff',}}>
                      < Icon style={{padding: 10}} name="email" size={30} color="black" />
                      <TextInput
                      style={styles.input}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="E-mail"
                      keyboardType='email-address'
                      autoCompleteType='off'
                      />
                  </View>

                  <View style={{marginTop:5,backgroundColor:"white",flexDirection:"row",width: 300,borderRadius: 6,borderWidth: 2,borderColor: '#ffffff',}}>
                      < Icon style={{padding: 10}} name="lock" size={30} color="black" />
                      <TextInput
                          style={styles.input}
                          value={password}
                          onChangeText={setPassword}
                          placeholder="Password"
                          secureTextEntry={true}
                      />
                  </View>

                  <View style={{marginTop:5,backgroundColor:"white",flexDirection:"row",width: 300,borderRadius: 6,borderWidth: 2,borderColor: '#ffffff',}}>
                      < Icon style={{padding: 10}} name="lock" size={30} color="black" />
                      <TextInput
                      style={styles.input}
                      value={cp}
                      onChangeText={SetCp}
                      placeholder="Reenter password "
                      autoCompleteType='off'
                      />
                  </View>

                  <Pressable style={styles.button} onPress={() =>NewUser(email, password)}>
                      <Text style={styles.text}>
                          Create User
                      </Text>
                  </Pressable>
              </View>
          </LinearGradient>
      </View>
    )

}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    input: {
        color:"black",
        fontSize:15,
        fontWeight:"bold"
      },
    linearGradient: {
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    button: {
      marginTop:15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginRight:5
    },
})


export default RegistrationScreen;