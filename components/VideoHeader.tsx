import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');

const VideoHeader = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.headerContainer}>
        <View style={styles.videoWrapper}>
          <Video
            source={{ uri: 'https://docs.expo.dev/static/videos/orbit/basic-features.mp4' }}
            style={styles.headerVideo}
            controls={true}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image 
            source={require('@/assets/images/back_button.png')} 
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Image 
            source={require('@/assets/images/save_video_button.png')} 
            style={styles.saveButtonIcon}
          />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    height: height * 0.3,
    position: 'relative',
  },
  videoWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',  // This will clip the video to the border radius
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 15,
    zIndex: 1,
    },
    saveButton: {
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
    zIndex: 2,
    },
    saveButtonIcon: {
    width: 24,
    height: 30,
    zIndex: 2,
  },
  headerVideo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default VideoHeader;
