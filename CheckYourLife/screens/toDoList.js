import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { SearchBar } from "react-native-elements";
import TaskItem from "./TaskItem";



const toDoList = () => {

  return (
    <View style = {styles.container}>
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
        />
        <View>NO COMPLETADOS</View>
        <FlatList
        data={[
          {key: 'Devin',
            Description:'hasbdfhaasdbfahbsdfjbhasd'},
          {key: 'Dan',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'Dominic',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'Jackson',
              Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'James',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'Joel',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'John',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'Jillian',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'Jimmy',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
          {key: 'Julie',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
        ]}
        renderItem={({item}) => (
            <TaskItem item={item}/>
        )}
      />
    </View>
  

  );
};

const styles = StyleSheet.create({
  });


export default toDoList;
