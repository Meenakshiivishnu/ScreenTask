import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Recent</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Work in Progress</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: 'yellow', // Yellow text
  },
  progressContainer: {
    marginTop: 20, // Add some spacing
  },
  progressText: {
    fontSize: 18,
    color: 'yellow', // Yellow text
  },
});

export default Profile;
