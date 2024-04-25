import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
// import otpScreen from './otpScreen'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation=useNavigation();
 const handleNavigation=()=>{
    navigation.navigate('OtpScreen')
  }
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor="white"/>
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          inmakes Learing <Text style={styles.greenText}>Hub</Text>
        </Text>
      </View>

      <View style={styles.title1container}>
        <Text style={styles.title1}>Enter your mobile number</Text>
        <Text style={styles.title2}>We will send you an OTP to verify</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.countryCodeInput}
            placeholder="+91"
          />
          <TextInput
            style={styles.mobileNumberInput}
            placeholder="Enter mobile number"
          />
        </View>
        <TouchableOpacity style={styles.button}
        onPress={handleNavigation}>
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
    backgroundColor:'white'
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'black'
  },
  greenText: {
    color: 'green',
  },
  title1container: {
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20,
  },
  title2: {
    color: "black",
    fontSize: 10,
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
    height: "20%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  countryCodeInput: {
    width: '10%',
    height: 40,
    // borderWidth: 1,
    // borderColor: '#ccc',
    marginRight: 5,
    padding: 8,
    backgroundColor: 'white',
    marginLeft:30,
    backgroundColor:"grey",
    borderRadius:5
  },
  mobileNumberInput: {
    flex: 1,
    height: 40,
    // borderWidth: 1,
    // borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    backgroundColor: 'white',
    width:"70%",
    marginTop:10,
    marginRight:20,
    backgroundColor:"grey",
    borderRadius:5
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width:"85%",
    marginLeft:10,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center'
    
  },
});

export default HomeScreen;
