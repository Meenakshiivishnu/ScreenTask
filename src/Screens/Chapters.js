import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const Chapters = () => {
  const [isPlayingChapter1, setIsPlayingChapter1] = useState(false);
  const [isPlayingChapter2, setIsPlayingChapter2] = useState(false);

  const toggleVideoChapter1 = () => {
    setIsPlayingChapter1(!isPlayingChapter1);
  };

  const toggleVideoChapter2 = () => {
    setIsPlayingChapter2(!isPlayingChapter2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.chapterContainer}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: 'VIDEO_URI_FOR_CHAPTER_1' }}
            style={styles.video}
            resizeMode="contain"
            paused={!isPlayingChapter1}
          />
          {!isPlayingChapter1 && (
            <TouchableOpacity style={styles.playButton} onPress={toggleVideoChapter1}>
              <Text style={styles.playButtonText}>Play Chapter 1</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.chapterTitle}>Chapter 1 Title</Text>
          <Text style={styles.chapterDescription}>
            Description for Chapter 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ligula nec
            quam rhoncus mattis. Vivamus nec lectus sit amet leo pharetra varius. Donec id velit at est fermentum
            posuere.
          </Text>
        </View>
      </View>
      <View style={styles.chapterContainer}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: 'VIDEO_URI_FOR_CHAPTER_2' }}
            style={styles.video}
            resizeMode="contain"
            paused={!isPlayingChapter2}
          />
          {!isPlayingChapter2 && (
            <TouchableOpacity style={styles.playButton} onPress={toggleVideoChapter2}>
              <Text style={styles.playButtonText}>Play Chapter 2</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.chapterTitle}>Chapter 2 Title</Text>
          <Text style={styles.chapterDescription}>
            Description for Chapter 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ligula nec
            quam rhoncus mattis. Vivamus nec lectus sit amet leo pharetra varius. Donec id velit at est fermentum
            posuere.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chapterContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
  },
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  playButtonText: {
    fontSize: 20,
    color: 'black',
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  chapterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chapterDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Chapters;
