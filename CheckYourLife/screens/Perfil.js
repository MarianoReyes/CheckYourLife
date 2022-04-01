//import { async } from '@firebase/util';
//import { firebase } from '@react-native-firebase/auth';
//import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, TextStyle,Image} from 'react-native'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { ScrollView } from 'react-native-gesture-handler';


const Perfil = () => {

  async function handleSignOut(){
    signOut(auth)
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding:10,width:'100%',backgroundColor:'#14279B',height:150}}> 
        </View>
        <View style={{alignItems:'center'}}>
          <Image source={require('../assets/PerfilTemp.png')} style={{width:140,height:140,borderRadius:100,marginTop:-70}}/>
        </View>
        <View style={styles.container}>
          <Text>Email: {auth.currentUser?.email}</Text>
        </View>
        <View style={styles.button1}>
          <Text>Product Designer</Text>
        </View>
        <View style={styles.button1}>
          <Text>Guatemala,Guatemala</Text>
        </View>
        <View style={styles.button1}>
          <Text>Share</Text>
        </View>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor: '#14279B',
    width:'90%',
    padding:20,
    paddingBottom:22,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20,
    marginBottom:20
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  button1: {
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor: '#fff',
    width:'90%',
    padding:20,
    paddingBottom:22,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20,
    marginBottom:10
  }
})