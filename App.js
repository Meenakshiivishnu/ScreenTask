import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorScreen from './src/NavigatorScreen/NavigatorScreen';

const App = () => {
  return (
    <NavigationContainer>
      
      <NavigatorScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({})
