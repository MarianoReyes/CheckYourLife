import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,SafeAreaView,Image} from 'react-native'
import {auth} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from "firebase/auth";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';





const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /*const navigation = useNavigation()*/

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user) {
        /*navigation.replace("Home")*/
        navigation.navigate("Home")
      }else{
        navigation.navigate("LOGIN")
      }
    })
  }, [])

  const handleSignUp = () => {
      createUserWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
      signInWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleForgot = () => {
    if (email === "") {
      alert("Ingrese un correo")
    }
    else {
      alert("Se ha enviado un correo a " + email + " para reestablecer la contraseña")
      sendPasswordResetEmail(auth,email)
    }
  }


  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  const signInWithFacebook = () => {
    signInWithPopup(auth, new FacebookAuthProvider())
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container}
    showsVerticalScrollIndicator={false}>
      
    
      <View style={styles.inputContainer}>
        <Image source={require('../assets/CheckL2.png')}
        style={styles.logo} />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <LinearGradient
            colors={['rgba(20,39,155,1)', 'rgba(92,122,234,1)']}
            style={styles.linearGradient}>
          <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp} style={[styles.button]}>
          <LinearGradient
            colors={['rgba(20,39,155,1)', 'rgba(92,122,234,1)']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={handleForgot}>
          <Text style={{marginTop:20}}> Forgot Password ?</Text>
        </TouchableOpacity>
        <Text style={{fontSize:16, marginTop:10}}>Or via social media</Text>
        <View style={{flexDirection:'row', marginTop:20}}>
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#14279B', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontWeight: 'bold', color: 'white',}} onPress={signInWithFacebook}>f</Text>
              </View>
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#f44336', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontWeight: 'bold', color: 'white',}} onPress={signInWithGoogle}>G</Text>
              </View> 
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#1565c0', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontWeight: 'bold', color: 'white',}} onPress={signInWithGithub}>Git</Text>
              </View>   
        </View>    

      </View>
    </SafeAreaView>
    
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#14279B',
    fontWeight: '700',
    fontSize: 16,
  },
  linearGradient : {
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      flexWrap: "wrap", 
      fontSize: 24,
      justifyContent:"center",
      height: 50,
      width: Platform.OS === 'web' ? 1000 : 300,
      
  },
  logo: {
    width: Platform.OS === 'web' ? 700 : 300, 
    height: Platform.OS === 'web' ? 250 : 100, 
    bottom: Platform.OS === 'web' ? 10 : 20,
    left: Platform.OS === 'web' ? "25%" : 10,
    alignContent: 'center'
  }
})