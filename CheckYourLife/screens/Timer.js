import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Vibration } from 'react-native';
import TimerHeader from './TimerHeader'
import TimerDisplay from './TimerDisplay'
import TimerButtons from './TimerButtons'
import audio from '../assets/alarma.mp3'

class Timer extends React.Component {

	sound = new Audio(audio);

	constructor(props) {
		super(props)
		this.state = {
			running: false,
			time: this.props.period * 60
		}
	}

	componentWillReceiveProps(nextProps) {
    	this.setState({ running: false, time: nextProps.period * 60 });
		if(this.state.running === true && this.state.time == 0)
		{
			this.handlePlay()
			if (this.time === 0){
				useEffect(() => {				
					sound.play();
					sound.volume = 2;
				  }, []);
			}
		}
	  }

	render() {
		return (
			<View>
				<TimerHeader
					running={this.state.running}
					intervalType={this.props.intervalType}
				/>
				<TimerDisplay
					time={this.state.time}
				/>
				<TimerButtons
					play={this.handlePlay}
					pause={this.handlePause}
					reset={this.handleReset}
					running={this.state.running}
				/>
			</View>
		)
	}

	componentDidUpdate() {
		if(this.state.running === true && this.state.time == 0)
		{
			clearInterval(this.timerId)
			Vibration.vibrate([500, 500, 500])
			this.props.Oncomplete()

		}
		else if(this.state.running === false)
		{
			clearInterval(this.timerId)
		}
	}
 	handlePlay = () => {
		this.setState({
			running: true
		})
		this.timerId = setInterval(() =>{
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	
	}

	handlePause = () => {
		clearInterval(this.timerId)
		this.setState({
			running: false
		})
	}

	handleReset = () => {	
		clearInterval(this.timerId)
		this.setState({
			running: false,
			time: this.props.period * 60
		})
	}
}

export default Timer;

const styles = StyleSheet.create({
  textStyle: {
    color: "#C2362B",
    fontSize: 25,
    fontWeight: "50",
    letterSpacing: 1.5,
    marginTop: 40,
    padding: 10
  }
});