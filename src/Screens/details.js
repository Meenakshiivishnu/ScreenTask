import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('school');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          inmakes Learning <Text style={styles.greenText}>Hub</Text>
        </Text>
        <View style={{ alignItems: "center", justifyContent: 'center' }}>
          <Image
            source={require('../../assets/googlelogo1.png')}
            style={{ width: 39, height: 41 }}
          />
        </View>
      </View>

      <View style={styles.title1container}>
        <Text style={styles.title1}>Students details</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.mobileNumberInput}
            placeholder="Full name"
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={styles.mobileNumberInput}
            placeholder="Email"
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={styles.mobileNumberInput}
            placeholder="select state"
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={styles.mobileNumberInput}
            placeholder="pincode"
            placeholderTextColor={"grey"}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Submit</Text>
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
    fontSize: 15,
    fontWeight: "bold",
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    width: '100%',
    height: "40%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-around', 
    width: '100%', 
  },
  mobileNumberInput: {
    width: '80%', 
    height: 40,
    marginBottom: 10,
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth:1,
    borderColor:"green"
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: "85%",
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Details;
