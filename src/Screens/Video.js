import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video'; // Import the Video component

const Video1 = () => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <Text style={styles.text}>Main Content</Text>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <View style={styles.videoRow}>
          <View style={[styles.videoItem, { backgroundColor: 'black' }]}>
            <Text style={styles.videoText}>Biology Video</Text>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              style={styles.video}
              resizeMode="cover"
            />
          </View>
          <View style={[styles.videoItem, { backgroundColor: 'black' }]}>
            <Text style={styles.videoText}>Physics Video</Text>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              style={styles.video}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.videoRow}>
          <View style={[styles.videoItem, { backgroundColor: 'black' }]}>
            <Text style={styles.videoText}>Chemistry Video</Text>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              style={styles.video}
              resizeMode="cover"
            />
          </View>
          <View style={[styles.videoItem, { backgroundColor: 'black' }]}>
            <Text style={styles.videoText}>Maths Video</Text>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              style={styles.video}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background color
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  videoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  videoItem: {
    width: '47%',
    aspectRatio: 16 / 9,
    marginBottom: 1,
  },
  videoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Video1;