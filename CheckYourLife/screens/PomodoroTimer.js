import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'
import {Audio} from 'expo-av';
import * as Font from "expo-font";


class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	async componentDidMount(){
		Audio.setAudioModeAsync({
		  allowsRecordingIOS:false,
		  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX, 
		  playsInSilentModeIOS:true,
		  interruptionModeAndroid: Audio.INTTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
		  shouldDuckAndroid:true,
		  staysActiveInBackground:true,
		  playsThroughEarpieceAndroid:true
		});

		this.sound = new Audio.Sound();
		const status = {
		  shouldPlay:false
		};
		
		this.sound.loadAsync(require("../assets/alarma.mp3"),status,false);
		}
		playSound(){
			this.sound.playAsync();
		}
	
	
	
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
			
			this.playSound()
			
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})
			
			this.playSound()
		}
	}

	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Tiempo Invalido")
			this.setState({
				workTime: 25
			})
		}
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Tiempo Invalido")
			this.setState({
				breakTime: 5
			})
		}
	}

	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
			<View>
				<View style={styles.row}>
					<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>Tiempo de Trabajo</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime} placeholder = "Tiempo de Trabajo en minutos" onChangeText={this.handleWorkTime} />
					</View>
					<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>Tiempo de Descanso</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} placeholder = "Tiempo de Descanso en minutos" onChangeText={this.handleBreakTime} />
					</View>
				</View>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			</View>
			)
	}
}
export default PomodoroTimer;

const styles = StyleSheet.create({
   row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "50",
    letterSpacing: 1.5,
    marginTop: 40,
    padding: 10
  }
});