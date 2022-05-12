import { CardStyleInterpolators } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Temporizador from "react-native-vector-icons/Entypo";


const Reloj = ({navigation}) => {

  const [timer, setTimer] = useState(false)
  const [number, setNumber] = useState(0)
  const [startStopText, setStartStopText] = useState('Comenzar')
  
  useEffect(() => {
    if(timer){
      setTimeout(() => {
        setNumber(number + 0.01);
      }, 10);
    }
  });

  

  const startStopButton = () =>{

    //Boton para iniciar el cronometro
    if(!timer){
      setStartStopText('Detener');
      setTimer(true);

    } else {
      clearInterval(number);
      setStartStopText('Comenzar');
      setTimer(null);
    }
  }

  const clearButton = () =>{
    clearInterval(timer);
    setStartStopText('Comenzar');
    setTimer(null);
    setNumber(0);
  }

  const onPress = ()=> navigation.navigate('Cronometro')

  //startStopButton();
  //clearButton();

  return(
    <View style={styles.body}>
      <View style={styles.iconoc}>
        <TouchableOpacity style={styles.opacidad} onPress={onPress}>
          <Temporizador name="clock" style={styles.icono} > </Temporizador>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
          <Text style= {styles.counterText}>{number.toFixed(2)}</Text>
      </View>
      
      <View style = {styles.bot}>
        <View style= {styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {startStopButton()}}>
              <Text style={styles.buttonText}>{startStopText} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {clearButton()}}>
              <Text style={styles.buttonText}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
          <Text style={styles.footerText}>CheckYourLife</Text>
      </View>

    </View>
    
  );

}

const styles = StyleSheet.create({ 
    body: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    counterText: {
        color: '#fff',
        fontSize: 100,
        fontWeight: 'bold',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
	      borderColor: "white",
	      borderRadius: 80,
	      borderWidth: 5,
		    backgroundColor: "#2d2465",
    },

    buttonContainer:{
        flexDirection: 'row',
        padding: 20,
    },

    button:{
	      padding: 10,
	      flexDirection: "row" ,
	      borderRadius: 80,
        backgroundColor: '#331DF4',
        marginHorizontal: 15,
        height: 70,
        justifyContent: 'center',
        width: 140,
        alignItems: 'center',
        top: 140
    },

    buttonText: {
        color: '#fff',
        fontSize: 30
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
      backgroundColor: '#331DF4',
      marginHorizontal: 15,
      height: 40,
      justifyContent: 'center',
      width: 180,
      alignItems: 'center',
      bottom: 120
    },
    TextT: {
      color: '#fff',
      fontSize: 20
    },
    iconoc: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    },
    icono: {
      alignSelf: 'flex-end',
      backgroundColor: 'white',

    },
    bot: {
      justifyContent: 'center',
      alignItems: 'center',
  },

})

export default Reloj;