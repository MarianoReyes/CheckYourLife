import React, {Component} from 'react';
import {Switch, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component{
  
  state = {
    toggled : false
  }

  toggleSwitch = (value) => {
    this.setState({toggled:value})
  } 

  constructor(props){
    super(props)

    this.state = {
      timer: null,
      number: 0,
      startStopText: 'Start',
    }
    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }
  
  startStopButton(){
    //Boton para iniciar el cronometro
    if(this.state.timer == null){
      let newS = this.state;
      newS.startStopText = 'Stop';
      this.setState(newS)
      this.state.timer = setInterval(() => {
        let newState = this.state;
        newState.number += 0.1
        this.setState(newState);
      }, 100);

    } else {
      clearInterval(this.state.timer);
      let newState = this.state;
      newState.startStopText = 'Start'
      newState.timer = null;
      this.setState(newState);
    }
  }

  clearButton(){
    clearInterval(this.state.timer);
    let newState = this.state;
    newState.startStopText = 'Start';
    newState.timer = null;
    newState.number = 0;
    this.setState(newState)
  }

  render(){
    return(
      <View style={styles.body}>
        <View style={styles.container}>
            <Text style= {styles.counterText}>{this.state.number.toFixed(1)}</Text>
            
            <View style= {styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.startStopButton}>
                    <Text style={styles.buttonText}>{this.state.startStopText} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.clearButton}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>CheckYourLife</Text>
        </View>

        <View style = {styles.TextCr}>
          <Switch onValueChange={this.toggleSwitch}
                  value={this.state.toggled}/>
          <Text style={styles.footerText}>{this.state.toggled? "Temporizador" : "Cronometro"}</Text>
        </View>
        
      </View>
      
    );
  }

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
      marginBottom: 80
    }
})