import { CardStyleInterpolators } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Temporizador from "react-native-vector-icons/Entypo";


const Reloj = ({navigation}) => {

  const [timer, setTimer] = useState(false)
  const [number, setNumber] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [startStopText, setStartStopText] = useState('Comenzar')
  
  var user;

  useEffect(() => {
    if(timer){

      user = setInterval(() => {
        setNumber(number + 1);
        if (number === 59){
          setMinutes(minutes+1);
          setNumber(0);
        }
      }, 1000);
    }
    return ()=> clearInterval(user);
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
    setMinutes(0);
  }

  const onPress = ()=> navigation.navigate('Cronometro')

  //startStopButton();
  //clearButton();

  return(
    <View style={styles.body}>
      <View style={styles.iconoc}>
        <TouchableOpacity onPress={onPress}>
          <Temporizador name="clock" style={styles.icono} > </Temporizador>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
          <Text style= {styles.counterText}>{minutes<10? "0"+minutes: minutes}:{number<10? "0"+number: number}</Text>
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
    </View>
    
  );

}

const styles = StyleSheet.create({ 
    body: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30,
    },

    counterText: {
        color: '#fff',
        fontSize: 100,
        fontWeight: 'bold',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
	      borderColor: "white",
	      borderWidth: 5,
        width: 350,
        height: 350,
        borderRadius: 350/2,
		    backgroundColor: "#2d2465",
    },

    buttonContainer:{
        flexDirection: 'row',
        padding: 20,
    },

    button:{
	      flexDirection: "row" ,
	      borderRadius: 80,
        backgroundColor: '#331DF4',
        marginHorizontal: 15,
        height: 70,
        justifyContent: 'center',
        width: 140,
        alignItems: 'center',
        top: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        padding: 30,
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
      justifyContent: 'flex-start',
      
    },
    icono: {
      alignSelf: 'flex-end',
      backgroundColor: 'white',
      fontSize: 50,
    },
    bot: {
      justifyContent: 'center',
      alignItems: 'center',
  },

})

export default Reloj;