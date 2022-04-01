import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function chat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <FeatherIcon name="send" style={styles.icon2}></FeatherIcon>
      </View>
      <View style={styles.rect2}>
        <View style={styles.icon3Row}>
          <EntypoIcon
            name="text-document-inverted"
            style={styles.icon3}
          ></EntypoIcon>
          <View style={styles.grupoColumn}>
            <Text style={styles.grupo}>GRUPO</Text>
            <Text style={styles.tareaDeEstadistica}>TAREA DE ESTADISTICA</Text>
          </View>
          <MaterialCommunityIconsIcon
            name="account-supervisor"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    backgroundColor: "#E6E6E6",
    marginTop: 666,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    
    marginTop: 13,
    marginLeft: 1197
  },
  rect2: {
    
    backgroundColor: "#E6E6E6",
    marginTop: -689,
    marginLeft: 101
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 69,
    
  },
  grupo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 192
  },
  tareaDeEstadistica: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 43
  },
  grupoColumn: {
    
    marginLeft: 270,
    marginTop: 2
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 69,
    
    marginLeft: 260
  },
  icon3Row: {
    
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 20
  }
});

export default chat;
