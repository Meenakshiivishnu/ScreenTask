import { StyleSheet, Text, View,StatusBar } from 'react-native';
import React from 'react';

const Courses = () => {
  return (
    <View style={styles.container}>
      {/* Black Background View */}
      <StatusBar backgroundColor="black" />
      <View style={styles.blackBackground}></View>

      {/* Content */}
      <View style={{ backgroundColor: 'black', width: "100%" }}>
        <View style={{ backgroundColor: 'black' }}>
          <Text style={{ color: 'white' }}>back button</Text>
        </View>
        {/* header */}
        <View style={{ marginLeft: 30, marginTop: 20 }}>
          <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 20,fontWeight:'bold' }}>Biology</Text>
          <View style={{ flexDirection: "row", paddingBottom: 80 }}>
            <Text style={{ backgroundColor: 'black', color: 'green', paddingTop: 5 }}>Progress: 50%</Text>
            <Text style={{ backgroundColor: 'black', color: 'green', paddingTop: 5, paddingLeft: 10 }}>exellent</Text>
          </View>
        </View>
      </View>

      {/* Green Overlay View */}
      <View style={{ backgroundColor: 'white', marginTop: -10, position: "relative",width:'90%',alignItems:"center",justifyContent:"center",marginLeft: 17,borderBottomWidth:5,borderBottomColor:"grey" }}>
      <View style={{ flexDirection: "row", paddingBottom: 80, }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>Progress: 50%</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>Progress: 50%</Text>
          </View>
         
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 10, position: "relative",width:'90%',alignItems:"center",justifyContent:"center",marginLeft: 17,borderBottomWidth:5,borderBottomColor:"grey" }}>
      <View style={{ flexDirection: "row", paddingBottom: 80, }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>Progress: 50%</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>Progress: 50%</Text>
          </View>
         
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 10, position: "relative",width:'90%',alignItems:"center",justifyContent:"center",marginLeft: 17,borderBottomWidth:5,borderBottomColor:"grey" }}>
      <View style={{ flexDirection: "row", paddingBottom: 80, }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>Progress: 50%</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>Progress: 50%</Text>
          </View>
         
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 10, position: "relative",width:'90%',alignItems:"center",justifyContent:"center",marginLeft: 17,borderBottomWidth:5,borderBottomColor:"grey" }}>
      <View style={{ flexDirection: "row", paddingBottom: 80, }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>Progress: 50%</Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>Progress: 50%</Text>
          </View>
         
      </View>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    // padding: 16,
    width: "100%",
    height: '100%',
    backgroundColor: 'grey',
  },
  blackBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'grey',
  },
});
