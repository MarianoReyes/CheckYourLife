//import { async } from '@firebase/util';
//import { firebase } from '@react-native-firebase/auth';
//import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, TextStyle,Image} from 'react-native'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';


const Perfil = () => {

  async function handleSignOut(){
    signOut(auth)
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
            colors={['rgba(20,39,155,1)', 'rgba(92,122,234,1)']}
            style={styles.linearGradienta}>
        <View> 
        </View>
        </LinearGradient>
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
          <LinearGradient
              colors={['rgba(20,39,155,1)', 'rgba(92,122,234,1)']}
              style={styles.linearGradientb}>
            <Text style={styles.buttonText}>Sign out</Text>
          </LinearGradient>
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
    backgroundColor: 'transparent',
    width: '100%',
    padding: 22,
    borderRadius: 10,
    alignItems: 'center',
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
  },
  linearGradienta : {
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap", 
    fontSize: 24,
    justifyContent:"center",
    height: Platform.OS === 'web' ? 125 : 150,
    width: "100%"
  },
  linearGradientb : {
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap", 
    fontSize: 24,
    justifyContent:"center",
    height: 70,
    width: Platform.OS === 'web' ? 1370: 350,
  }
})