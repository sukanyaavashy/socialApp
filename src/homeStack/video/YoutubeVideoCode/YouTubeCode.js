import React, { useState } from "react";
import {View,TextInput,StyleSheet,Dimensions,TouchableOpacity,Text,Pressable} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useSelector, useDispatch} from 'react-redux';
import Clipboard from "@react-native-clipboard/clipboard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const YouTubeCode = ({navigation})=>{
    const [copiedVideoUrl, setCopiedVideoUrl] = useState('')

    const copyToClipboard = () => {
        Clipboard.setString('hello world')
      }

      const fetchCopiedText = async () => {
        const text = await Clipboard.getString()
        setCopiedVideoUrl(text)
      }

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#08d4c4', 'pink']}
                style={styles.linearGradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                    <View style={{
                        marginTop: 10,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        width: 320,
                        borderRadius: 6,
                        borderWidth: 2,
                        borderColor: '#ffffff',justifyContent:"center",alignItems:'center'}}>
                        <TextInput
                            style={styles.input}
                            value={copiedVideoUrl}
                            multiline={true}
                            onChangeText={setCopiedVideoUrl}
                            placeholder="VideoId"
                            selectTextOnFocus={false}
                        />
                    </View>

                    <View style={{marginTop:20,flexDirection:'row'}}>
                        <TouchableOpacity style={styles.button} onPress={() => copyToClipboard()}>
                          <Text style={{color:"white",fontWeight: 'bold'}}>Copy Clipboard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => fetchCopiedText()}>
                          <Text style={{color:"white",fontWeight: 'bold'}}>Paste</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Pressable style={styles.button} onPress={()=>navigation.navigate('VideoPlayer',{copiedVideoUrl,})}>
                            <Text style={{color:"white",fontWeight: 'bold'}}>Play</Text>
                        </Pressable>
                    </View>
            </LinearGradient>
        </View>
    )
}


export default YouTubeCode;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
    },
    input: {
      color: 'black',
      fontSize: 17,
      fontWeight: 'bold',

    },
    linearGradient: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
    button: {
        alignItems: 'center',
        marginLeft:10,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
})