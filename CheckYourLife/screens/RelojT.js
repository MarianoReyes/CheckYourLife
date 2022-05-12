import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import PomodoroTimer from './src/components/PomodoroTimer';

const RelojT = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <PomodoroTimer />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RelojT;