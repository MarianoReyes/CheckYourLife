import React from 'react';
import {Text, View,  ScrollView, ImageBackground, SafeAreaView, Dimensions, StyleSheet} from 'react-native';



const LoginScreen = () => {

  return (
    <SafeAreaView style={styles.container}
      style={{
        flex: 1,
        backgroundColor: 'black'}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground 
        source={require('../assets/CheckL2.png')}
        style={{
          height: Dimensions.get('window').height / 5,
          top:70,
          left:10,
        }}>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text>Welcome</Text>
          <Text>Don't Have an account</Text>
        </View>
      </View>
    </SafeAreaView>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    bottomView: {
        flex: 1.5,
        backgroundColor: 'white',
        top:100,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
      
    },
});