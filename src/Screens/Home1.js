import React, { useState, useRef } from 'react';
import { View, Text, Button, DrawerLayoutAndroid, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the desired icon from react-native-vector-icons

const Home1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Define isDrawerOpen state
  const navigation = useNavigation();
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      drawerRef.current.closeDrawer();
    } else {
      drawerRef.current.openDrawer();
    }
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = () => {
    navigation.navigate('Recent');
  };

  const handleNavigation1 = () => {
    navigation.navigate('Profile');
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={renderDrawer}
      onDrawerClose={() => setIsDrawerOpen(false)} // Close drawer when it's closed
    >
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
  <Icon name="menu-outline" size={30} color="green" />
</TouchableOpacity>
<Text style={styles.heading}>Inmakes learing hub</Text>
<TouchableOpacity onPress={handleNavigation} style={styles.playButton}>
  
  <Text style={{ color: 'green' }}>Classes</Text>
</TouchableOpacity>

        </View>

        {/* Name Section */}
        <View style={styles.nameSection}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>John Doe</Text>
        </View>

        {/* DropDownPicker */}
        <View style={styles.dropdownSection}>
          <DropDownPicker
            items={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: 'grey', borderWidth: 1, borderColor: 'green', color: 'white' }}
            placeholder='Select your class'
          />
        </View>

        {/* Scrollable Views (5 small views in a row) */}
        <ScrollView horizontal style={styles.scrollViews}>
          <View style={styles.smallView}>
            <Text style={{ color: 'black' }}>Biology</Text>
          </View>
          <View style={styles.smallView}>
            <Text style={{ color: 'black' }}>Physics</Text>
          </View>
          <View style={styles.smallView}>
            <Text style={{ color: 'black' }}>Chemistry</Text>
          </View>
          <View style={styles.smallView}>
            <Text style={{ color: 'black' }}>Maths</Text>
          </View>
          <View style={styles.smallView}>
            <Text style={{ color: 'black' }}>Others</Text>
          </View>
        </ScrollView>

        {/* Parent Container for Video and Rectangles */}
        <View style={styles.videoParent}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: "green" }}>Recent Course</Text>
          {/* Rectangles */}
          <View style={styles.rectangles}>
            <View style={styles.rectangle}>
              {isPlaying ? (
                <Video
                  source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                  style={styles.video}
                  controls={true}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={require('../../assets/splash.jpeg')}
                  style={{ width: 146, height: 145, resizeMode: 'cover' }}
                />
              )}
            </View>
            <View style={styles.rectangle}>
              {isPlaying ? (
                <Video
                  source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                  style={styles.video}
                  controls={true}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={require('../../assets/splash.jpeg')}
                  style={{ width: 146, height: 145, resizeMode: 'cover' }}
                />
              )}
            </View>
          </View>

          {/* Video Player */}
          <View style={styles.videoContainer}>
            {isPlaying ? (
              <Video
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                style={styles.video}
                controls={true}
                resizeMode="cover"
              />
            ) : (
              <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={styles.playButton}>
                <Text style={{ textAlign: 'center', paddingTop: 20, color: 'green' }}>Click here to play the video</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Bottom View with 5 Components and Names */}
        <View style={styles.bottomView}>
          <View style={styles.component}>
            <Text style={{ textAlign: 'center', paddingTop: 20, color: 'green' }}>Recent</Text>
          </View>
          <View style={styles.component}>
            <Text style={{ textAlign: 'center', paddingTop: 20, color: 'green' }}>Exams</Text>
          </View>
          <View style={styles.component}>
            <Text style={{ textAlign: 'center', paddingTop: 20, color: 'green' }}>Profile</Text>
          </View>
          <TouchableOpacity onPress={handleNavigation} style={styles.component}>
            <Text style={{ textAlign: 'center', paddingTop: 20, color: 'green' }}>Classes</Text>
          </TouchableOpacity>
          <View style={styles.component}>
            <Text style={{ textAlign: 'center', paddingTop: 20, color: 'green' }}>Contact</Text>
          </View>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const renderDrawer = () => (
  <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
    {/* Profile Picture and Name */}
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
      <Image
        source={require('../../assets/googlelogo1.png')}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }}
      />
      <Text style={{ color: 'white', fontSize: 18 }}>John Doe</Text>
    </View>

    {/* Drawer Items */}
    <View style={{ marginBottom: 20 }}>
      {/* Drawer Item 1 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 1</Text>
      </View>

      {/* Drawer Item 2 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 2</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 3</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 4</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 5</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 6</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
        <Icon name="checkbox-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>Drawer Item 7</Text>
      </View>


      
    </View>

    {/* Logout Button */}
    <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
      <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Logout</Text>
    </TouchableOpacity>
  </View>
);

    



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  heading: {
    fontSize: 20,
    color: 'green',
  },
  drawerButton: {
    padding: 10,
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
  },
  rectangles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 5,
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
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
  },
  drawerItemsContainer: {
    marginBottom: 20,
  },
  drawerItem: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Home1;
