import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const TaskItem = (props) => {
    return (
        <View style={styles.item}>
            <LinearGradient
            colors={['rgba(20,39,155,1)', (props.item.completed? 'rgba(9,16,61,1)' : 'rgba(92,122,234,1)')]}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
                <MaterialCommunityIcons onPress={() => {
                    props.fun({key: props.item.key, completed:  !props.item.completed});

                }} name={props.item.completed == true ? "check-box-outline":"checkbox-blank-outline"} size={32} color="white" />
                <View style={styles.taskcontent}>
                    <Text style={styles.text}>{props.item.key}</Text>
                </View>
            </LinearGradient>
        </View>
  
    );
  };

  const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        marginVertical: 2,
        marginHorizontal:5,
        //background: "linear-gradient(135deg, rgba(20,39,155,1) 0%, rgba(92,122,234,1) 100%)",
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
    },
    linearGradient: {
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap", 
        fontSize: 18,
        width: '100%',
        height: '100%',
    }
  });
  
  export default TaskItem;