import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

function chat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.opacidad}>
          <EntypoIcon
            name="text-document-inverted"
            style={styles.task}
        ></EntypoIcon>
        </TouchableOpacity>
        
        <View style={styles.grupocolumn}>
          <Text style={styles.grupo}>GRUPO</Text>
          <Text style={styles.tareaDeEstadistica}>TAREA DE ESTADISTICA</Text>
        </View>
        
        <TouchableOpacity style={styles.opacidad}>
          <MaterialCommunityIconsIcon
            name="account-supervisor"
            style={styles.personas}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        
      </View>
      <View style={{ flex: 2, backgroundColor: "#5C7AEA" }} />
      <View style={styles.foot}>
        
        <View style={styles.escribir}>
          <Text style={styles.mensaje}>Escribe aquí tu mensaje. . .</Text>
        </View>
        <TouchableOpacity style={styles.opacidad}>
          <FeatherIcon name="send" style={styles.enviar}></FeatherIcon>
        </TouchableOpacity>
       
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    justifyContent: "space-between",
  },
  head: {
    flexDirection:'row',
    backgroundColor: "#3D56B2",

  },
  enviar: {
    color: "white",
    fontSize: 40,
    alignSelf:'center'
  },
  foot: {
    flexDirection:'row',
    backgroundColor: "#14279B",
  },
  task: {
    color: "white",
    fontSize: 60,
    alignSelf:'center'
  },
  grupo: {
    color: "white",
    fontSize: 35,
    alignSelf:'center',


  },
  tareaDeEstadistica: {
    color: "white",
    fontSize: 20,
    alignSelf:'flex-starts',
    alignSelf:'center',
    alignContent:'center'
  },
  personas: {
    color: "white",
    fontSize: 60,
    alignSelf:'center'
  },
  grupocolumn: {
    margin: 'auto'
  },
  mensaje: {
    color: "white",
    fontSize: 20,
    alignSelf:'flex-starts',
    alignSelf:'center',
    alignContent:'center'
  },
  escribir: {
    margin: 'auto'
  },
  opacidad: {
    margin: 'auto'
  }
});

export default chat;
