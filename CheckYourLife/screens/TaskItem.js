import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const TaskItem = (props) => {
    return (
        <View style={styles.item}>
        <MaterialCommunityIcons name={props.completed == true ? "check-box-outline":"checkbox-blank-outline"} size={32} color="white" />
        <View style={styles.taskcontent}>
            <Text style={styles.text}>{props.item.key}</Text>
        </View>
        </View>
  
    );
  };

  const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        marginVertical: 2,
        marginHorizontal:5,
        backgroundColor: "#001219",
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