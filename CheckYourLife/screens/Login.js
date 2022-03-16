import React from 'react';
import {Text, View,  ScrollView, ImageBackground, SafeAreaView, Dimensions, StyleSheet,Label,TextInput, Touchable, TouchableOpacity} from 'react-native';




const LoginScreen = ({navigation}) => {

  console.log(navigation);

  return (
    <SafeAreaView style={styles.container}
      showsVerticalScrollIndicator={true}>
      <ImageBackground 
        source={require('../assets/CheckL2.png')}
        style={{
          height: Dimensions.get('window').height / 5,
          top:70,
          left:10,
        }}>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color: 'black',fontSize: 34}}>Welcome</Text>
          <Text>Don't Have an account?
            <Text style={{color:'red', fontStyle: 'italic'}}>
              {' '}
              Register now
              </Text>
          </Text>
          <TextInput
            style={{marginTop:40, borderBottomColor: '#ddd', borderBottomWidth:1, paddingBottom:20
            }}
            placeholder = "Username"
          />
          <TextInput
            style={{marginTop:40, borderBottomColor: '#ddd', borderBottomWidth:1, paddingBottom:20}}
            placeholder = "Password"
          />

          <View style={{alignItems: "center", justifyContent:'center', marginTop:40}}>
            <TouchableOpacity style={{width:200,backgroundColor:'#00aae4', padding:10, alignItems:'center', justifyContent: 'center', borderRadius:40, marginTop:5}}>
              <Text style={{textAlign: 'center', color:'white', fontSize:16}}>
                Login Now
              </Text>
            </TouchableOpacity>
            <Text style={{marginTop:20}}> Forgot Password ?</Text>
            <Text style={{fontSize:16, marginTop:10}}>Or via social media</Text>
            <View style={{flexDirection:'row', marginTop:20}}>
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#3f51b5', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontWeight: 'bold', color: 'white',}}>f</Text>
              </View>
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#f44336', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontWeight: 'bold', color: 'white',}}>G</Text>
              </View> 
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#1565c0', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontWeight: 'bold', color: 'white',}}>in</Text>
              </View>   
            </View>    
        </View>
      </View>
      </View>
    </SafeAreaView>
  

  );
};


export default LoginScreen;


const styles = StyleSheet.create({
  bottomView: {
      flex: 1.5,
      backgroundColor: 'white',
      top:100,
      borderTopStartRadius:60,
      borderTopEndRadius:60,
    
  },

  container:{
    width: '100%',
    borderWidth:3.5,
    flex: 1,
    backgroundColor: 'black',
    

  },
  InputContainer: {
    borderWidth:0
  },
  InputText:{
    color:'#0779e4',
    fontWeight: 'bold',
    marginLeft: 5
  }

});