import React from 'react';
import {Text, SafeAreaView,TextInput,StyleSheet, View} from 'react-native';


const GeneralColor = '#001219';

const timeTracker = () => {

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.titles}>NOMBRE</Text>
            <TextInput
            maxLength={50}
            style={styles.input}
            placeholder=""
            ></TextInput>
        </View>
        <View style={styles.container}>
            <Text style={styles.titles}>DESCRIPCION</Text>
            <TextInput
            multiline
            maxLength={150}
            style={styles.input2}
            placeholder=""
            ></TextInput>
        </View>
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

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        flexGrow: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    titles : {
        fontSize:20,
        fontWeight:"bold",
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 5,
    },
    input : {
        height: 60,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal:10,
        width: '100%',
    },
    input2 : {
        height: 100,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal:10,
        width: '100%',
    }
});


export default timeTracker;