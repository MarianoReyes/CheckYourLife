import React, { useState } from 'react';
import {Text,TextInput,StyleSheet, View, Pressable, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { LinearGradient } from 'expo-linear-gradient';

const GeneralColor = 'linear-gradient(135deg, rgba(20,39,155,1) 0%, rgba(92,122,234,1) 100%)';


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
    <ScrollView height='100%'>
        <LinearGradient
            colors={['rgba(20,39,155,1)', 'rgba(92,122,234,1)']}
            style={styles.linearGradient}>
            <View style={styles.star}>
            <AntDesign name="staro" size={40} color='white' />
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
        </LinearGradient>
    </ScrollView>
  

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
        backgroundColor: 'transparent',
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
      linearGradient : {
          height: '100%',
          width: '100%',
      }
});


export default timeTracker;