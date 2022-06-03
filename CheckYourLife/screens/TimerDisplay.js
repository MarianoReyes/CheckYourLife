import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	// display currently running timer
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
	    padding: 10,
	    borderColor: "white",
	    borderRadius: 80,
	    borderWidth: 5,
		alignSelf: 'center',
		width: 450,
        height: 150,
		alignItems: 'center',
		backgroundColor: "#2d2465",
	},
	textStyle: {
		color: "white",
	    fontSize: 80,
	    fontWeight: "400",
	}
})