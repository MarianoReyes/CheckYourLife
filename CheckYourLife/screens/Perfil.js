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
import { useAuth, upload } from "../firebase"
import { useEffect, useState } from "react";


const Perfil = () => {


  //Manejar imagen del usuario
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  // Salir de cuenta
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

        <div className="fields">
          <input type="file" onChange={handleChange} />
          <button disabled={loading || !photo} onClick={handleClick}>Cambiar Foto de Perfil</button>
        </div>
        <View style={{alignItems:'center'}}>
          <img src={photoURL} style={{width:140,height:140,borderRadius:100,marginTop:-70}} />
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
    width: Platform.OS === 'web' ? "90%": 350,
  },
  fields : {
    margin: 50,
    screenLeft : '10%',
  }
})