import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,SafeAreaView,Image} from 'react-native'
import {auth} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";



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

  return (
    <SafeAreaView style={styles.container}
    showsVerticalScrollIndicator={false}>
      
    
      <View style={styles.inputContainer}>
        <Image source={require('../assets/CheckL2.png')}
        style={{width: 1000, height: 100, bottom:"50%",left:"20%",alignContent: 'center'}} />

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
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

        <Text style={{marginTop:20}}> Forgot Password ?</Text>
        <Text style={{fontSize:16, marginTop:10}}>Or via social media</Text>
        <View style={{flexDirection:'row', marginTop:20}}>
              <View style={{height:40, width:40, borderRadius: 40/2, backgroundColor: '#14279B', alignItems:'center', justifyContent:'center'}}>
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
    marginTop: 40,
  },
  button: {
    backgroundColor: '#14279B',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
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
})