import React from 'react';
import {Text, SafeAreaView, View, Pressable , StyleSheet, Image } from 'react-native';



const Finanzas = () => {

  return (
    <SafeAreaView style={styles.container_general}>
        
        <Pressable style={styles.button} >
          <Text style={styles.text}>Agregar Gasto / Ingreso</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.text}>Consultar Gasto</Text>
        </Pressable>

        <View style={styles.container}>
          <Image  style={styles.image} source={require("../assets/grafica_finanzas.png")}/>
        </View>

        <Text style={styles.tituloTabla}>
          Resumen
        </Text>
        <View style={styles.row}>
          <Text style={styles.border}>
            Gastos
          </Text>
          <Text style={styles.border}>
            Ingresos
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.texto_tabla}>
            Primer gasto
          </Text>
          <Text style={styles.texto_tabla}>
            Primer ingreso
          </Text>
        </View>
        
    </SafeAreaView>
  

  );
};

const styles = StyleSheet.create({
  container_general: {
    backgroundColor: 'white',
    marginTop: 50,
    marginBottom: 50
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  image: {
    width: 420,
    height: 420,
    resizeMode: 'contain' 
  },
  row: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'space-between',
  },
  border: {
    width:"50%",
    textAlign:"center",
    fontSize: 20,
    fontWeight: "bold"
  },
  texto_tabla: {
    width:"50%",
    textAlign:"center",
    fontSize: 15,
    marginTop: 10,
  },
  tituloTabla: {
    width:"100%",
    textAlign:"center",
    fontSize: 25,
    margin: 15,
    fontWeight: "bold"
  },
});


export default Finanzas;