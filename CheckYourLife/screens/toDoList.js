import React, { useState } from 'react';
import { SearchBar } from "react-native-elements";
import TaskItem from "./TaskItem";
import { View,Text, StyleSheet,FlatList,ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const GeneralColor = '#001219';

const toDoList = ({ navigation }) => {

  const [shouldShowa, setShouldShowa] = useState(true);
  const [shouldShowb, setShouldShowb] = useState(true);
  const [shouldShowc, setShouldShowc] = useState(false);
  const [shouldShowd, setShouldShowd] = useState(false);
  const [shouldShowe, setShouldShowe] = useState(false);

  return (
    <ScrollView>
      <View style={styles.SorA}>
         <AntDesign style={styles.subvars} onPress={() => {setShouldShowc(!shouldShowc); setShouldShowd(false); setShouldShowe(false)}}  name={'search1'} size={shouldShowc ? 35 : 25} color={GeneralColor} />
         <AntDesign style={styles.subvars} onPress={() => {setShouldShowd(!shouldShowd); setShouldShowc(false); setShouldShowe(false)}} name={'plus'} size={shouldShowd ? 35 : 25} color={GeneralColor} />
         <Feather style={styles.subvars} onPress={() => {console.log(navigation.navigate('AddItem')); setShouldShowc(false); setShouldShowd(false)}} name={'more-horizontal'} size={25} color={GeneralColor} />
         </View>
         {shouldShowc ? (
        <SearchBar
          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{backgroundColor: 'white',}}
          inputContainerStyle={{backgroundColor: 'white'}}
          placeholder="Search Here..."
          lightTheme
          round
          //value={this.state.searchValue}
          //onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        /> ) : null}
        {shouldShowd ? (
          
        <SearchBar
          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{backgroundColor: 'white',}}
          inputContainerStyle={{backgroundColor: 'white'}}
          placeholder="Name"
          lightTheme
          round
          //value={this.state.searchValue}
          //onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />) : null}
        {shouldShowd ? ( 
          <Pressable style={styles.boton} onPress={console.log('ola')}>
          <Text style={styles.text}>Agregar</Text>
        </Pressable>) : null}
        <Text onPress={() => setShouldShowa(!shouldShowa)} style={styles.finder}>NO COMPLETADOS <AntDesign name={shouldShowa ? "upcircle" : "downcircle"} size={18} color={GeneralColor} /></Text>
        {shouldShowa ? (
          <FlatList
          data={[
            {key: 'Devin',
              Description:'hasbdfhaasdbfahbsdfjbhasd',
              completed: false,},
            {key: 'Dan',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',
              completed: false,},
            {key: 'Dominic',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'Jackson',
                Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'James',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'Joel',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'John',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'Jillian',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'Jimmy',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
            {key: 'Julie',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
          ]}
          renderItem={({item}) => (
              <TaskItem item={item}/>
          )}
        />
        ) : null}
        
      <Text onPress={() => setShouldShowb(!shouldShowb)} style={styles.finder}>COMPLETADOS <AntDesign name={shouldShowb ? "upcircle" : "downcircle"} size={18} color={GeneralColor} /></Text>
      {shouldShowb ? (
          <FlatList
          data={[
            {key: 'Devin',
              Description:'hasbdfhaasdbfahbsdfjbhasd',
              completed: true,},
            {key: 'Dan',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',
              completed: true,},
            {key: 'Dominic',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'Jackson',
                Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'James',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'Joel',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'John',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'Jillian',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'Jimmy',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
            {key: 'Julie',
              Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
          ]}
          renderItem={({item}) => (
              <TaskItem item={item}/>
          )}
        />
        ) : null}
    </ScrollView>
  

  );
};

const styles = StyleSheet.create({
  finder: {
    fontSize:20,
    fontWeight:"bold",
    color: {GeneralColor},
    textAlign: 'center',
    marginVertical: 5,
  },
  SorA : {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
  },
  subvars : {
    marginHorizontal:10,
    marginVertical:10,
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal:10,
    marginVertical:10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'whit',
  },

  });


export default toDoList;
