import React from 'react';
import {Text, SafeAreaView} from 'react-native';



const toDoList = () => {

  return (
    <SafeAreaView>
        <Text 
        style = {{
            fontSize: 30,
            textAlign: "center",
        }}
        >TO DO LIST</Text>
    </SafeAreaView>
  

  );
};


export default toDoList;
