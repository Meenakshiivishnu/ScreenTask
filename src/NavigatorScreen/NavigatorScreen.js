import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import OtpScreen from '../Screens/otpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Details from '../Screens/details';
import SelectSchool from '../Screens/selectSchool';
import Tour from '../Screens/Tour';
import MainScreen from '../Screens/MainScreen';
import Recent from '../components/Recent';
import Profile from '../components/Profile';


const Stack = createStackNavigator();


const NavigatorScreen = () => {
  return (
    <Stack.Navigator>
      

      <Stack.Screen name="Home" component={HomeScreen} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
      <Stack.Screen name="OtpScreen" component={OtpScreen} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
            <Stack.Screen name="details" component={Details} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
       <Stack.Screen name="school" component={SelectSchool} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
      <Stack.Screen name="Tour" component={Tour} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
      <Stack.Screen name="MainScreen" component={MainScreen} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
      <Stack.Screen name="Recent" component={Recent} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
       <Stack.Screen name="Profile" component={Profile} 
          options={{ headerShown: false, }}
          initialRoute={{ statusBarHidden: false }}
      />
      
      
    </Stack.Navigator>
  );
};


export default NavigatorScreen;



const styles = StyleSheet.create({});
