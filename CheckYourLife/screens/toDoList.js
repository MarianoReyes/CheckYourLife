import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { SearchBar } from "react-native-elements";



const toDoList = () => {

  return (
    <SafeAreaView style = {styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          //value={this.state.searchValue}
          //onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
        data={[
          {key: 'Devin',
            Description:'hasbdfhaasdbfjahbsdfjbhasd'},
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
            <View style={styles.item}>
            <AntDesign name="checksquareo" size={50} color="white" />
            <View style={styles.taskcontent}>
                <Text style={styles.text}>{item.key}</Text>
                <Text style={styles.description}>{item.Description}</Text>
            </View>
            </View>
        )}
      />
    </SafeAreaView>
  

  );
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 70,
        marginVertical: 10,
        marginHorizontal:20,
        backgroundColor: "#4361ee",
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap", 
    },
    taskcontent: {
        marginLeft:20,
    },
    text: {
        fontSize:20,
        fontWeight:"bold",
        color: "white",
    },
    description: {
        fontSize: 14,
        color: "white",
    }
  });


export default toDoList;
