import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tour = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.topContainer}>
        
        <View style={{ alignItems: "center", justifyContent: 'center' }}>
          <Image
            source={require('../../assets/googlelogo1.png')}
            style={{ width: 310, height: 320 }}
          />
        </View>
      </View>

     

      <View style={styles.bottomContainer}>
      <View style={styles.title1container}>
        <Text style={styles.title1}>App tour Title</Text>
        <Text style={styles.title2}> The App tour description goes here</Text>
      </View>
        
        

        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    // borderColor:"grey",
    // borderWidth:2,
    width:"99%",
    // borderRadius:20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  greenText: {
    color: 'green',
  },
  title1container: {
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20,
  },
  title1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  title2: {
    // color: "black",
    fontSize: 13,
    // fontWeight: "bold",
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    width: '100%',
    height: "40%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderColor:"grey",
    // borderWidth:2
  },
  
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: "15%",
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Tour;
