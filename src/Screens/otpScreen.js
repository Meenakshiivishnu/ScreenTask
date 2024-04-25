import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar,Image } from 'react-native';
// import otpScreen from './otpScreen'
import { useNavigation } from '@react-navigation/native';
const OtpScreen = () => {
  const navigation=useNavigation();
 const handleNavigation=()=>{
    navigation.navigate('details')
  }
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor="white"/>
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          inmakes Learing <Text style={styles.greenText}>Hub</Text>
        </Text>
        <View style={{alignItems:"center",justifyContent:'center'}}>
        <Image
          source={require('../../assets/googlelogo1.png')}
          style={{ width: 39, height: 41 }}
        />
        </View>

      </View>

      <View style={styles.title1container}>
        <Text style={styles.title1}>Verification Code</Text>
        <Text style={styles.title2}>please type the verification code </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.countryCodeInput}
           
          />
          <TextInput
            style={styles.countryCodeInput}
           
          />
          <TextInput
            style={styles.countryCodeInput}
            
          />
          <TextInput
            style={styles.countryCodeInput}
            
          />
          <TextInput
            style={styles.countryCodeInput}
            
          />
          <TextInput
            style={styles.countryCodeInput}
            
          />

        </View>
        <TouchableOpacity style={styles.button}
        onPress={handleNavigation}>
          <Text style={styles.buttonText}>Resent OTP</Text>
        </TouchableOpacity>
        <Text style={{color:"grey",fontSize:10,paddingTop:10}}>resend after 28s</Text>
        <TouchableOpacity>
        
        </TouchableOpacity>
        <Text style={{color:"green",fontSize:12,paddingTop:10,fontWeight:'bold'}}>Contact us</Text>
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
    height: "30%",
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
    marginLeft:0,
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
    marginTop:20,
    marginRight:20,
    backgroundColor:"grey",
    borderRadius:5
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width:"75%",
    marginLeft:10,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center'
    
  },
});

export default OtpScreen;
