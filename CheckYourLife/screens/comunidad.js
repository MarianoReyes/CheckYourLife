import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar} from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import Estrella from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";


const comunidad = ({navigation}) => {

  const DATA = [
    {
      title: "----- Favoritos -----",
      data: ["Cumpleaños de Sara","Despensa","Fiesta Juanca", "Tarea de Estadistica", "Hoja de Trabajo BD"]
    },
    {
      title: "----- Todos los Grupos -----",
      data: ["Arreglos Florales", "Asistencia Charla WEB", "Animación y Efectos", "Bienvenida estudiantes","Clase Estadistica","Curso de verano","Cumpleaños Sara","Despensa","Fiesta Juanca","Hoja de Trabajo BD","Tarea de Estadistica","Union de departamentos"]
    }
  ];

  const onPress = ()=> navigation.navigate('CHAT')

  const Item = ({ title }) => (
    
      
      <View style={styles.boton}>
        <View style={styles.persona} >
          <Estrella name="staro" style={styles.icon1} >  </Estrella>
        </View>

        <View style={styles.grupo}>
            <  Text style={styles.title}  >{title}  </Text>
        </View>
        <TouchableOpacity  onPress={onPress}>
        <View style={styles.persona} >
          <Icon1 name="message1" style={styles.icon1} >  </Icon1>
        </View>
        </TouchableOpacity>
      </View>  
      
    
 );




    return(

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

    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginLeft: 15,
    marginRight:15,
    justifyContent:'flex-start'
  },
  persona: {
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },

  header: {
    fontSize: 35,
    fontWeight:"bold",
    backgroundColor: "#005C97",
    textAlign: 'center',
    color: "#F5F5F5",
 
  },
  title: {
    fontSize: 35,
    justifyContent:'flex-start',
    alignItems:'center',
    color:'white'

  },
  icon1: {
    color: "white",
    fontSize: 40,
    marginTop: 14,
    marginBottom:14,
    alignItems:'flex-end'
    
    },
  grupo: {
    margin: 'auto',
    marginTop: 14,
    marginBottom:14
    },
  boton: {
    flexDirection:'row',
    backgroundColor: "#094a96",
    marginVertical: 7,  
    borderRadius: 10,
    
  }

});

export default comunidad;