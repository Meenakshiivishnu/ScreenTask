import { StyleSheet, Text, View,StatusBar, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Settings55 = () => {
  return (
    <View style={styles.container}>
      {/* Black Background View */}
      <StatusBar backgroundColor="black" />
      <View style={styles.blackBackground}></View>

      {/* Content */}
      <View style={{ backgroundColor: 'black', width: "100%" }}>
        {/* <View style={{ backgroundColor: 'black' }}>
          <Text style={{ color: 'white' }}>back button</Text>
        </View> */}
        {/* header */}
        <View style={{ marginLeft: 30, marginTop: 20 }}>
          <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 20,fontWeight:'bold',textAlign:'center' }}>Profile</Text>
          <View style={{ flexDirection: "row", paddingBottom: 80 }}>
            {/* <Text style={{ backgroundColor: 'black', color: 'green', paddingTop: 5 }}>Progress: 50%</Text>
            <Text style={{ backgroundColor: 'black', color: 'green', paddingTop: 5, paddingLeft: 10 }}>exellent</Text> */}
          </View>
        </View>
      </View>

      
      <View style={{ backgroundColor: 'white', marginTop: -50, position: "relative",width:'90%',alignItems:"center",justifyContent:"center",marginLeft: 17,borderBottomWidth:5,borderBottomColor:"grey" }}>
      <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}>
    <Image
      source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEX///8AAAD39/f7+/sODg7p6elVVVUaGhowMDAHBweAgIBkZGQjIyPV1dXz8/MpKSlISEjOzs5fX19QUFB1dXXh4eFoaGgWFhY2NjaXl5e+vr5ubm6Hh4d8fHxDQ0Pn5+ePj489PT2tra3Dw8Ojo6Obm5vd3d3IyMi0tLQtLS3lvyLcAAAFsUlEQVR4nO2diZaqMAxARUDGDXdxX1BH/P8ffDg+jzMjkNImTWF6P0B7hbZpmtZGw2KxWCwWi8ViMYGmy90CNWbJYb4bBJ7jOO2otxh34lH1jPbncc95xxseRtxNK4G/XGRIPAmmfe4GirFqtQs0vlgsm9ytBEmKHsaL6BByt7SQ1YeQxh1vY27P37eENe4MVtwNzuHglfJIGfvcbc7AH5bVSAlO3M1+YxVIeKRsuBv+i4OcRsrQqOFrKu2RTirmdBS3q+CRjl4zboH/uOVG3XcCQ0zmih7pMzHi7eooe6T9xIAef0HwSMcu9nhlBIa6YnSYPcKs5ZMUzIGX6oD1ImLt8DGah+O0GD1CyQArG8aXSyUyeafHtv7to3owRsJ4Pf2BxzQtYj8QtkcyRheJWB7JDN3DcQ4cIhjB4m9uHCJowcl3GDLDJwoPZ61fRH05lUWkP5xHjU5eXHV7fNJ46J9KlkQiO90i2OHJk7buyJGoi2jvJCGVh3PRKzIiE5nqFTmTiUz0ilAEWg8GekXWZCKRXhH8tciTtl6RCZmIozfa2tGJ6F0lHulE9lpFZLZwBdH7RKhCrRStHg21XcMiPL0idPNIoFdkQybyoVcEcz/hJ5p3F/DTpU8078E1yUTOekUaAyoR3Sk6qvHX053YolpZaV5XNRp7IpGlbhGqTqK/JnhL4qF5oXuHJmfKsfkmVqlcEo7KLYrsr/bM752wdJkvTMwhQtDdGbr6HR+pVOuF7jjrCfbqqsdVRucj9xKuB4I9cLEMWQ9czLmkzXliCXObZMvogbm9sOAtmHWxksDeJ6tHOnJFOCI8c/p3TijTouadw0wwUlxjbokv1Kvj+SvjH6jmT48GnFV4oPZMJgadd40VenzXkPfqwUl6FOY+b/GbvdzMGJl3zNWViVZ2enc+BbmKH51+4C2N6h4v3HLHjo08cvyf/Vp4+NqZd974B/up0FOZaK8mLY9/gPpKtDbrKo4wyRtz+tP8enOvleR18RFDp/Hjdfq7B/m/7Odl/F6/6e021/yBKh2/B/NYp8y180w6tAszOOH1vO22hsfbYjcZr5erwkkjfFaFLDpaXjw3Gf+IRuZIEV//+8ZRMKce0lbdt5jqhpLFWf4etntbuuyQv8nswm31C05mmVVTx5hk4r/m36TzofhS5wYEQQe96yfHPIsvugpfuLoVfLA3RVVJwHDQ60guV0dQmWd7irYQHgktNaKNxBeORCrxIpy991C4WMOblswWJqKVkR8IkVlcag07jIWnlX32GJjDVnEAC0sXYXrdRMBlvyy7MlabrkZSZw29ybLoW5urrcy2iqeQHb7IJ3m84Tbuv70O/ukyX0h/qPQGivqx+2Ax6U47m8Nm01mPhzfVLceWVEdx6Q4kSDORMHEJzyPII5Htpiu1VqJb1oOmGguBknVQdPXJypTKsc4ICn+wCMqEdEfu1hZRouYc56YpMoRfrhBpx5kK4fMMuBfpECBYRURR4oeL4CORvztSG2JZL5JrQnARqi+gO+CNh9CRBrpz0YiIjMAkBdbYCNTgNNFrYCk4wiJV6CJCpy7p7kBABd6fr0RfF5lJ6M6uopKAIgamHLKAwy0jcw7vHP6OCOHVAZjAOYiKiMDlaoTXa2BSGxE4oX3kbqIYcNR45G6iGLURge9zrMRypEYic1CkbKUoE/D2QkVE4DxKUWGIQcAiZLdr4AKn5GsjUoE84x34sg4ropchKEJ22Sou8AHl2ogYvu32BM6ZVkRkAYoYv+/2oDYi8DZiRUTg/y6oxPaIyA0qFRHp/R0R7hYKAt+vyd1CQWojAt6c7XK3UBBwN5TuRkxcaiMC3mVO958JuNRGBLxw2uduoCi1EYEKnSojAp22obprFR2ojJniD9xIgI4n1kaE6u+p0IHqnCojAt3eSneNOjLg2c1mRYA8LBaLxWKxWCyWN/4BTex2KtxQiZQAAAAASUVORK5CYII=' }} // Replace with the actual URL or local path to the profile picture
      style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10,borderWidth:3,borderColor:'green' }}
    />
    <Text style={{ fontSize: 10, fontWeight: 'bold',color: 'green' }}>Your Name</Text>
  </View>
      <View style={{ flexDirection: "row", paddingBottom: 30,marginTop: 10 }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}> Course Progress: </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>Progress: 50%</Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 30,marginTop: 10 }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>   Course Result:     </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>    Result: 100%</Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 30,marginTop: 10 }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>   Cousre Name:      </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>   Name: Biology</Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 30,marginTop: 10 }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>   Course Result:     </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>    Result: 100%</Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 30,marginTop: 10 }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>   Course Result:     </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>    Result: 100%</Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 30,marginTop: 10 }}>
            <Text style={{ backgroundColor: 'green', color: 'white', paddingTop: 5 }}>   Course Result:     </Text>
            <Text style={{ backgroundColor: 'black', color: 'white', paddingTop: 5, paddingLeft: 10, }}>    Result: 100%</Text>
          </View>


          <View style={{alignItems:'center',justifyContent:'center',paddingBottom: 26}}>
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'green',width:290,height:50,borderRadius:10}}>
        <Text>SIGN IN</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',paddingBottom: 30}}>
      <TouchableOpacity style={{flexDirection: "row",backgroundColor:'white',width:290,height:50,borderRadius:10,borderBottomWidth:5,borderBottomColor:"green"}}>
        <Text style={{color:'grey',marginLeft:5}}>Select</Text>
        <Text style={{color:'grey',marginLeft:50}}>Add</Text>
        <Text style={{color:'grey',marginLeft:40}}>Delete</Text>
        <Text style={{color:'grey',marginLeft:40}}>Update</Text>
      </TouchableOpacity>
      </View>
      </View>
     

     
    </View>
  );
};

export default Settings55;

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
