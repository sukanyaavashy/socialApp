import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native'
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Feather'
// import { DATA } from './AudioList';


const PlayMusic = ({navigation,route}) => {
  const data=route.params.data
  const [music, setMusic] = useState(null)
  const [second, setSecond] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playIcon, setPlayIcon] = useState(true)
  console.log('playMusic',data);

  const play = () => {
    let summer = new Sound(`${data.song}`,Sound.MAIN_BUNDLE,(err) => {
      //data.song
      if (err) {
        console.log('hata', err)
        return
      }
      summer.play((success) => {
        console.log('end', success)
      })
      setDuration(summer.getDuration())
      setPlayIcon(false)
    })
    console.log('summer', summer)
    setMusic(summer)
  }
  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          setSecond(second)
        })
      }, 100)
    }
  }, [music])

  const setVolume = (type) => {
    const volume = music.getVolume()
    console.log(volume)
    if (type == "+") {
      const newVolume = volume + .1
      music.setVolume(newVolume)
    } else {
      const newVolume = volume - .1
      music.setVolume(newVolume)
    }
  }



  return (

    <View style={styles.container}>
        <Image source={require('../../assets/music.png')} style={styles.logoIcon}/>
        <View style={{marginTop:20, flexDirection:'row'}}>
            {playIcon?
              <Pressable onPress={()=>play()}>
                  <Icon name='playcircleo' size={34} style={{paddingLeft:20, color:'black'}}/>
              </Pressable>:
              <Pressable onPress={()=>{music.pause(), setPlayIcon(true)}}>
                  <Icon name='pausecircleo' size={34} style={{paddingLeft:20, color:'black'}}/>
              </Pressable>
            }
            <Pressable onPress={() => { music.stop() }}>
                  <Icons name='stop-circle' size={34} style={{paddingLeft:20, color:'black'}}/>
            </Pressable>

        </View>
        <View style={{margin:10, borderRadius:10,}}>
          <Button title="setVolume high" onPress={() => { setVolume('+') }} />
        </View>
        <View style={{margin:10, borderRadius:10,}}>
          <Button title="setVolume Low" onPress={() => { setVolume("-") }} />
        </View>
        <View style={{margin:10, borderRadius:10,}}>
          <Button title="setCurrentTime" onPress={() => { music.setCurrentTime(100) }} />
        </View >

        <View style={{margin:10, borderRadius:10,}}>
          <Button title="isPlaying" onPress={() => { console.log(music.isPlaying()) }} />
        </View>

        <View>
          <Text style={{color:'black', fontWeight:'bold', fontSize:18}}>{second}  / Total Second {duration}</Text>
        </View>


    </View>
  )
}
export default PlayMusic

styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoIcon:{
        width:300,
        height:300
    }
})