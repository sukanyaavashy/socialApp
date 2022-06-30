import React ,{useState,useRef}from 'react';
import {View,Dimensions,Alert,StyleSheet,Text} from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VideoPlayer = () => {
    const route = useRoute();
    console.log(route.params.copiedVideoUrl)




  return (
    <View style={{flex:1}}>
        <YoutubePlayer
        height={300}
        play={true}
        videoId={'84WIaK3bl_s'}
      />
        {/* <Video
         onEnd={onEnd}
         onLoad={onLoad}
         onLoadStart={onLoadStart}
         onProgress={onProgress}
         fullscreenOrientation='portrait'
         paused={paused}
         ref={videoPlayer}
         resizeMode={screenType}
         source={{uri:`${route.params.copiedVideoUrl}`}}
         style={styles.mediaPlayer}
         volume={10}
        />
        <MediaControls
         duration={duration}
         isLoading={isLoading}
         mainColor="#333"
         onFullScreen={onFullScreen}
         isFullScreen={enterFullScreen}
         onPaused={onPaused}
         onReplay={onReplay}
         onSeek={onSeek}
         onSeeking={onSeeking}
         playerState={playerState}
         progress={currentTime}
         toolbar={renderToolbar()}
        /> */}

    </View>
  );
};

export default VideoPlayer;

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    toolbar:{
        marginTop:30,
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
    },
    mediaPlayer:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"black",
        justifyContent:"center",
    },
});