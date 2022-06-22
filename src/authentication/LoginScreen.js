import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckCirle from 'react-native-vector-icons/MaterialIcons';
import LongArrow from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector,useDispatch,Provider} from "react-redux";
// import { Provider } from "react-redux";

// import {useSelector,useDispatch} from "react-redux";
import {setEmail,setPassword,getUserUid} from "../redux/actions";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function LoginScreen({navigation}){
    const storeData = useSelector((state)=>state)
    const dispatch =useDispatch()
    const {email,password,uid}=useSelector(state=>state.userReducer);


    // const state = useSelector(e=>e)
    // const dispatch = useDispatch();

    console.log(state,'sdsd')
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
            dispatch(setEmail(val));
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
            dispatch(setPassword(val));
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    //  const loginHandle = ()=>{
    //    dispatch(login("hsgdsdcdh"))
    //  }




    // const loginHandle = (email, password) => {

    //     const foundUser = Users.filter( item => {
    //         return email == item.email && password == item.password;
    //     } );

    //     if ( data.email.length == 0 || data.password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'email or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'email or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    //     signIn(foundUser);
    // }





    const loginHandle = (email, password) => {

        if (email.length==0){
          Alert.alert("Enter Email")
        }else if(password.length==0){
          Alert.alert("Enter Password")
        }
        else{
          auth().signInWithEmailAndPassword(email, password).then(
            function (result){
              const value= result.user.uid;
              dispatch(getUserUid(value));
              console.log(uid);
              console.log('..........',storeData.userReducer.email)
            }

          ).catch(
            function(e){
              if (e.code==="auth/user-not-found"){
                return(Alert.alert("In correct email"))
              }else if(e.code==="auth/wrong-password"){
                return(Alert.alert("The password is invalid"))
              }else if(e.code==="auth/invalid-email"){
                return(Alert.alert("Enter valid email"))

              }
              else{
                return(console.log(e.message),Alert.alert(e.mesage))
              }

            });
        }

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
        <View style={styles.action}>
        <Icon name='email' size={24}/>
        <TextInput
        placeholder="Your Email"
        placeholderTextColor="#666666"
        autoCapitalize="none"
        // onChangeText={(value)=>dispatch(setPassword(value))}
        onChangeText={(val) => textInputChange(val)}
        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        style={styles.inputField}/>


        {data.check_textInputChange ?
                <Animatable.View
                    animation="bounceIn"
                >
                   <CheckCirle name='check-circle' color="green"  size={20}/>
                </Animatable.View>
                : null}
        </View>


        <Text style={{marginTop: 35}}

            >Password</Text>
        <View style={styles.action}>
        <Icon name='lock' size={20}/>
        <TextInput
        placeholder="Your Password"
        placeholderTextColor="#666666"
        autoCapitalize="none"
        secureTextEntry={data.secureTextEntry ? true : false}
        // onChangeText={(value)=>dispatch(setEmail(value))}
        onChangeText={(val) => handlePasswordChange(val)}
        style={styles.inputField}/>
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
                :
              <Feather
                name="eye"
                color="grey"
                size={20}
              />
            }
            </TouchableOpacity>

        </View>


        <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationScreen')}
            >
            <View style={styles.register}>
                <View style={styles.registerText}>
                <Text styles={{color:"blue"}}>Register</Text>
                </View>

            <LongArrow
                name="long-arrow-right"
                color="blue"
                size={20}
              />

            </View>
        </TouchableOpacity>


        <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                      onPress={() => {loginHandle(email, password)}}


                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                 >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>


            </View>

        </Animatable.View>

    </View>
  )
}
}

const styles=StyleSheet.create({
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
        // flex:2,
        // backgroundColor:"#fff",
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // padding: 20

        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30

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
    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    inputField:{
        flex: 1,
         marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    register:{
        flexDirection: 'row',
        justifyContent: "flex-end",
        margin: 20,
        color:"blue"
        // padding: 10

    },
    registerText:{
        padding: 10,
        color:"blue",
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color:"blue",
        margin:5
    },
})