import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Login } from './Navigation';




const App = () => {

  return (
    <SafeAreaView style={styles.container}
    showsVerticalScrollIndicator={false}>
      <Login></Login>
      {/*<Navigation></Navigation>*/}

    </SafeAreaView>
  

  );
};

const styles = StyleSheet.create({
  bottomView: {
      flex: 1.5,
      backgroundColor: 'white',
      top:101,
      borderTopStartRadius:60,
      borderTopEndRadius:60,
    
  },

  container:{
    width: '100%',
    borderWidth:3.5,
    flex: 1,
    backgroundColor: 'black',

  },
  InputContainer: {
    borderWidth:0
  },
  InputText:{
    color:'#0779e4',
    fontWeight: 'bold',
    marginLeft: 5
  }

});

export default App;