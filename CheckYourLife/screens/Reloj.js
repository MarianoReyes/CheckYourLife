import React, {Component, useState} from 'react';
import {Switch, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Reloj = () => {
  
  const [toggled, setToggled] = useState(false)

  const toggleSwitch = (value) => {
    setToggled({toggled:value})
  } 

  const [timer, setTimer] = useState(null)
  const [number, setNumber] = useState(0)
  const [startStopText, setStartStopText] = useState('Start')


  startStopButton = startStopButton();
  clearButton = clearButton();
  
  const startStopButton = () =>{
    //Boton para iniciar el cronometro
    if(state.timer == null){
      let newS = state;
      newS.startStopText = 'Stop';
      setStartStopText(newS);
      state.timer = setInterval(() => {
        let newState = state;
        newState.number += 0.1
        setNumber(newState);
      }, 100);

    } else {
      clearInterval(state.timer);
      let newState = state;
      newState.startStopText = 'Start'
      newState.timer = null;
      setStartStopText(newState);
      setTimer(newState);
    }
  }

  const clearButton = () =>{
    clearInterval(state.timer);
    let newState = state;
    newState.startStopText = 'Start';
    newState.timer = null;
    newState.number = 0;
    setStartStopText(newState);
    setTimer(newState);
    setState(newState)
  }

  return(
    <View style={styles.body}>
      <View style={styles.container}>
          <Text style= {styles.counterText}>{state.number.toFixed(1)}</Text>
          
          <View style= {styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={startStopButton}>
                  <Text style={styles.buttonText}>{state.startStopText} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={clearButton}>
                  <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
          </View>
      </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}>CheckYourLife</Text>
      </View>

      <View style = {styles.TextCr}>
        <Switch onValueChange={toggleSwitch}
                value={state.toggled}/>
                OnPress = {() => {
                  navigation.navigate('RelojT')
                }}
        <Text style={styles.footerText}>{state.toggled? "Temporizador" : "Cronometro"}</Text>
      </View>
      
    </View>
    
  );

}

const styles = StyleSheet.create({ 
    body: {
      flex: 1,
      backgroundColor: '#221D41',
       justifyContent: 'center',
    },

    counterText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer:{
        flexDirection: 'row',
        padding: 20,

    },

    button:{
        backgroundColor: '#331DF4',
        marginHorizontal: 15,
        height: 40,
        justifyContent: 'center',
        width: 75,
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff'
    },

    footer: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#000',
      opacity: 0.4,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: 20
    },
    footerText: {
      color: '#fff'
    },
    TextCr: {
      justifyContent: 'center',
      alignItems: 'center',
    }
})

export default Reloj;