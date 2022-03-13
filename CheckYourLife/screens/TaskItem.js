import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const TaskItem = (props) => {

    console.log(props.item.key);
    return (
        <View style={styles.item}>
        <AntDesign name="checksquareo" size={50} color="white" />
        <View style={styles.taskcontent}>
            <Text style={styles.text}>{props.item.key}</Text>
            <Text style={styles.description}>{props.item.Description}</Text>
        </View>
        </View>
  
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
  
  export default TaskItem;