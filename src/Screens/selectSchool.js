import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'; // Import the library

const SelectSchool = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null); 

  const handleNavigation = () => {
    navigation.navigate('Tour');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          inmakes Learning <Text style={styles.greenText}>Hub</Text>
        </Text>
        <View style={{alignItems:"center",justifyContent:'center'}}>
        <Image
          source={require('../../assets/googlelogo1.png')}
          style={{ width: 39, height: 41 }}
        />
        </View>
      </View>

      <View style={styles.title1container}>
        <Text style={styles.title1}>Select your school board</Text>
      </View>

      <View style={styles.bottomContainer}>
        
          <View style={styles.pickerContainer}>
            <DropDownPicker
              items={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              defaultValue={selectedValue}
              containerStyle={{ height: 40,marginBottom:30,width:"80%",marginLeft:20 }}
              style={styles.selectInput}
              itemStyle={styles.selectItem}
              dropDownStyle={styles.selectDropdown}
              onChangeItem={(item) => setSelectedValue(item.value)}
              placeholder="Select board"
            />
            <DropDownPicker
              items={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              defaultValue={selectedValue}
              containerStyle={{ height: 40,marginBottom:30,width:"80%",marginLeft:20}}
              style={styles.selectInput}
              itemStyle={styles.selectItem}
              dropDownStyle={styles.selectDropdown}
              onChangeItem={(item) => setSelectedValue(item.value)}
              placeholder="select class"
              
            />
          
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>continue</Text>
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
  selectContainer: {
    width: '80%',
    marginBottom: 10,
  },
  selectInput: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'green',
  },
  selectItem: {
    justifyContent: 'flex-start',
  },
  selectDropdown: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
  },
  mobileNumberInput: {
    width: '80%',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "green",
    marginBottom: 10,
    padding: 8,
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: "85%",
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SelectSchool;
