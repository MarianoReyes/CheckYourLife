import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Continua Trabajando, Tu puedes!"
			}
			else {
				return "Hora de Trabajar!"
			}	
		}
		else {
			if(this.props.running === true) {
				return "Hora de descansar!"
			}
			else {
				return "Relajate"
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.textStyle}>{texttoshow}</Text>
		)				
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "10",
    letterSpacing: 1.5,
    marginTop: 40,
    padding: 10
  }
});

export default TimerHeader;