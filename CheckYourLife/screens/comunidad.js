import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity} from "react-native";
import Icon1 from "react-native-vector-icons/MaterialIcons";




const DATA = [
  {
    title: "Grupos Recientes",
    data: ["Cumpleaños de Sara","Despensa","Fiesta Juanca", "Tarea de Estadistica", "Hoja de Trabajo BD"]
  },
  {
    title: "Todos los Grupos",
    data: ["Arreglos Florales", "Asistencia Charla WEB", "Animación y Efectos", "Adrián","Alvaro","Carlos","Coral","Daniel","Darina","David","Eva","Flor","Gabriel","Gori","Ghita","Javier","José","Mar","Marc","Mariana","Sara","Paula"]
  }
];


const Item = ({ title }) => (
  <View style={styles.item}>
     <TouchableOpacity >
     <Icon1 name="person" style={styles.icon1}>  </Icon1>
     <Text style={styles.title}>{title}  </Text>
     
     
    </TouchableOpacity>
  </View>
);


const comunidad = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#E6E6E6",
    padding: 20,
    marginVertical: 8
  },

  header: {
    fontSize: 32,
    backgroundColor: "#398AB9",
    textAlign: 'center',
    color: "#F5F5F5"
  },
  title: {
    fontSize: 34,
    textAlign: 'center',

  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    position: "absolute",

  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    position: "absolute",

  },

});

export default comunidad;