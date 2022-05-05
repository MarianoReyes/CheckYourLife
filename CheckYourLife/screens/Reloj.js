import React, {useState} from 'react';
import {Switch, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Reloj = ({navigation}) => {
  
  const [toggled, setToggled] = useState(false)

  const toggleSwitch = (value) => {
    setToggled({toggled:value})
  } 

  const [timer, setTimer] = useState(null)
  const [number, setNumber] = useState(0)
  const [startStopText, setStartStopText] = useState('Start')
  
  const startStopButton = () =>{
    
    //Boton para iniciar el cronometro
    if(timer == null){
      setStartStopText('Stop');
      setTimer(setInterval(() => {
        setNumber(number + 0.1)
        console.log(number)
      }, 100));

      /*useEffect(() => {
        setTimeout(() => {
          setNumber((number) => number + 1);
        }, 1000);
      });*/

    } else {
      clearInterval(timer);
      setStartStopText('Start');
      setTimer(null);
    }
  }

  const clearButton = () =>{
    clearInterval(timer);
    setStartStopText('Start');
    setTimer(null);
    setNumber(0);
  }

  //startStopButton();
  //clearButton();

  return(
    <View style={styles.body}>
      <View style={styles.container}>
          <Text style= {styles.counterText}>{number}</Text>
          
          <View style= {styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {startStopButton()}}>
                  <Text style={styles.buttonText}>{startStopText} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {clearButton()}}>
                  <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
          </View>
      </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}>CheckYourLife</Text>
      </View>

      <View style = {styles.TextCr}>
        <Switch onValueChange={() => toggleSwitch}
                value={toggled}
                OnPress = {() => {
                  navigation.navigate('RelojT')
                }}/>
        <Text style={styles.footerText}>{toggled? "Temporizador" : "Cronometro"}</Text>
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