import React, { useState } from 'react';
import {Text, SafeAreaView,TextInput,StyleSheet, View, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";

const GeneralColor = '#001219';


const timeTracker = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
      };

  return (
    <SafeAreaView>

        <View style={styles.star}>
        <AntDesign name="staro" size={40} color={GeneralColor} />
        </View>
        <View style={styles.container}>
            <Text style={styles.titles}>NOMBRE</Text>
            <TextInput
            maxLength={50}
            style={styles.input}
            placeholder=""
            ></TextInput>
        </View>
        <View style={styles.container}>
            <Text style={styles.titles}>DESCRIPCIÓN</Text>
            <TextInput
            multiline
            maxLength={150}
            style={styles.input2}
            placeholder=""
            ></TextInput>
        </View>
        <View style={styles.container}>
            <Text style={styles.titles}>VENCIMIENTO</Text>
            <Pressable style={styles.boton} onPress={showDatePicker}>
                <Text style={styles.text} >Elegir Fecha</Text>
            </Pressable>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
        
    </SafeAreaView>
  

  );
};

const styles = StyleSheet.create({
    container : {
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight:10,
        marginLeft:10,
        borderRadius:10,
        marginVertical:10,
        backgroundColor: GeneralColor,
        padding:10,
    },
    titles : {
        fontSize:20,
        fontWeight:"bold",
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 5,
    },
    input : {
        height: 60,
        backgroundColor: 'white',
        marginVertical: 10,
        width: '80%',
        marginHorizontal:10,
        borderRadius:10,
    },
    input2 : {
        height: 100,
        backgroundColor: 'white',
        marginVertical: 10,
        width: '80%',
        marginHorizontal:10,
        borderRadius:10,
    },
    star : {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical:10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: GeneralColor,
      },
});


export default timeTracker;