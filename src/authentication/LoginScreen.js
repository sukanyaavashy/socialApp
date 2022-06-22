import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckCirle from 'react-native-vector-icons/MaterialIcons';
import LongArrow from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const LoginScreen = ({navigation}) => {
    const state = useSelector(e=>e)
    const dispatch = useDispatch();

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
            // onPress={() => navigation.navigate('RegistrationScreen')}
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
                    //  onPress={() => {loginHandle()}}
                    // onPress={() => navigation.navigate('homeScreen')}
                    onPress={()=>{navigation.navigate('RegistrationScreen')}}
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

                {/* <TouchableOpacity
                    // onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity> */}
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
        // color:"blue"
        // margin:5
    }

})