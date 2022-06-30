import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const PlayVideo = ({route}) => {

    // We will use this hook to get video current time and change it throw the player bar.
    const videoPlayer = useRef(null);
    const data=route.params.data
    /**
     * The following useState hooks are created to control the vide duration, if the video
     * is paused or not, the current time video, if the player is PLAYING/PAUSED/ENDED and if the video
     * is loading.
     */
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    // This function is triggered when the user released the player slider.
    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };

    // This function is triggered when the user interact with the player slider.
    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    // This function is triggered when the play/pause button is pressed.
    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    /**
     * This function is triggered when the replay button is pressed.
     * There is a minmial bug on Android devices that does not allow the player to replay the video if changing the state to PLAYING, so we have to use the 'Platform' to fix that.
     */
    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    // This function is triggered while the video is playing.
    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    /**
     * This function and the next one allow us doing something while the video is loading.
     * For example we could set a preview image while this is happening.
     */
    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    // This function is triggered when the player reaches the end of the media.
    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };

    // useState hook to check if the video player is on fullscreen mode

    const [isFullScreen, setIsFullScreen] = useState(false);

    // This function is triggered when the user press on the fullscreen button or to come back from the fullscreen mode.
    const onFullScreen = () => {
        if (!isFullScreen) {
          Orientation.lockToLandscape();
        } else {
          Orientation.lockToPortrait();
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        <View style={{ marginHorizontal: isFullScreen ? 50 : 0 , flex:1, justifyContent:'center', alignItems:'center'}}>
            <Video
                onEnd={onEnd}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                posterResizeMode={'cover'}
                onProgress={onProgress}
                paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                resizeMode={'cover'}
                source={data.video}
                style={styles.backgroundVideo}
            />
            <MediaControls
                isFullScreen={isFullScreen}
                duration={duration}
                isLoading={isLoading}
                progress={currentTime}
                onFullScreen={onFullScreen}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                mainColor={'green'}
                playerState={playerState}
                style={isFullScreen ? styles.backgroundVideoFullScreen : styles.backgroundVideo}
                sliderStyle={isFullScreen ? { containerStyle: styles.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 250,
        width: '100%',
    },
    mediaControls: {
        width: screenHeight - 170,
        height: '100%',
        flex: 1,
        alignSelf: Platform.OS === 'android' ? screenHeight < 800 ? 'center' : 'flex-start' : 'center',
    },
    backgroundVideoFullScreen: {
        height: screenHeight,
        width: screenWidth,
    },
});

export default PlayVideo;
