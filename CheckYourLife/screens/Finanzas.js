import React, { useState } from 'react';
import {Text, SafeAreaView, View, Pressable , StyleSheet, Image, ScrollView } from 'react-native';



const Finanzas = () => {
  
  const[gastos, setGastos] = useState([
    {date: "20/01/23", gasto:200.00},
    {date: "22/02/23", gasto:210.00},
    {date: "24/08/22", gasto:5.00},
    {date: "22/02/22", gasto:40.00},
    {date: "15/03/22", gasto:300.00},
    {date: "30/01/22", gasto:20.00},
    {date: "5/02/22", gasto:400.00},
  ])

  const[ingresos, setIngresos] = useState([
    {date: "20/01/23", ingreso:100.00},
    {date: "22/02/23", ingreso:210.00},
    {date: "24/08/22", ingreso:3.00},
    {date: "22/02/22", ingreso:54.00},
    {date: "15/03/22", ingreso:250.00},
    {date: "30/01/22", ingreso:60.00},
    {date: "5/02/22", ingreso:150.00},
  ])

  //agregar gastos / ingresos
  //ver gastos / ingresos
  //ver saldo total
  return (
    <ScrollView style={styles.container_general}>
      
      <Pressable style={styles.button} >
        <Text style={styles.text}>Agregar Gasto / Ingreso</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.text}>Consultar Gastos / Ingresos</Text>
      </Pressable>

      <View style={styles.container}>
        <Text style={styles.tituloGrafica}>Saldo desplegado</Text>
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
      
    </ScrollView>
    
  

  );
};

const styles = StyleSheet.create({
  container_general: {
    backgroundColor: 'white',
    paddingVertical: 25,
    flexGrow: 1,
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
  tituloGrafica: {
    textAlign:"center",
    fontSize: 30,
    fontWeight: 600
  }
});


export default Finanzas;