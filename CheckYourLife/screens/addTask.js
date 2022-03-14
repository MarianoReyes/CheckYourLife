import React from 'react';
import {Text, SafeAreaView} from 'react-native';



const timeTracker = () => {

  return (
    <SafeAreaView>
        <Text 
        style = {{
            fontSize: 30,
            textAlign: "center",
            marginTop: "20%"
        }}
        >ADD TASK</Text>
    </SafeAreaView>
  

  );
};


export default timeTracker;