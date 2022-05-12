import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import PomodoroTimer from './PomodoroTimer'

export default class RelojT extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <PomodoroTimer/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});