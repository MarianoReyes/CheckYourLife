import React from 'react';
import Navigation from './Navigation';
import {Text, View,  ScrollView, ImageBackground, SafeAreaView, Dimensions, StyleSheet} from 'react-native';



const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation></Navigation>
    </SafeAreaView>

  );
};


export default App;


