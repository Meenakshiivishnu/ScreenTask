import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';
import Video from 'react-native-video';
import DropDownPicker from 'react-native-dropdown-picker'; // You may need to import this library
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tour from './Tour';
import Details from './details';
import Home1 from './Home1';
import Courses from './Courses';
import Chapters from './Chapters';
import Settings5 from './Settings';
import Video1 from './Video';
const Tab = createBottomTabNavigator();
const MainScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
 const navigation=useNavigation()
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };
  const handleNavigation=()=>{
    navigation.navigate('Recent')
  }
  const handleNavigation1=()=>{
    navigation.navigate('Profile')
  }
  
  
  
  return (
    <View style={styles.container}>
      {/* Header: Heading and Play Button */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home1} options={{ headerShown: false, }}/>
        <Tab.Screen name="Recent" component={Courses} options={{ headerShown: false, }}/>
        <Tab.Screen name="Chapters" component={Chapters} options={{ headerShown: false, }}/>
        <Tab.Screen name="Video1" component={Video1} options={{ headerShown: false, }}/>
        <Tab.Screen name="Settings5" component={Settings5} options={{ headerShown: false, }}/>
      </Tab.Navigator>
     
     


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  heading: {
    fontSize: 20,
    color: 'green',
  },
  playButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white',
  },
  nameSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  dropdownSection: {
    backgroundColor: 'white',
    padding: 16,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  scrollViews: {
    flexDirection: 'row',
  },
  smallView: {
    width: 90,
    height: 30,
    backgroundColor: 'lightgray',
    margin: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoParent: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    marginTop: -355, 
    backgroundColor:'white'
  },
  rectangles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    
  },
  rectangle: {
    width: 150,
    height: 150,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'green',
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    borderRadius: 15,
  },
  component: {
    width: 30,
    height: 30,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default MainScreen;