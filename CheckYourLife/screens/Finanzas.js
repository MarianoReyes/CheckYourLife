import React, { useState } from 'react';
import {Text, SafeAreaView, View, Pressable , StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Table, Row, Rows } from 'react-native-table-component';
import TaskItem from "./TaskItem";



const Finanzas = () => {
  
  const[gastos, setGastos] = useState([
    {key:1, date: "20/01/23", gasto:200.00},
    {key:2, date: "22/02/23", gasto:210.00},
    {key:3, date: "24/08/22", gasto:5.00},
    {key:4, date: "22/02/22", gasto:40.00},
    {key:5, date: "15/03/22", gasto:300.00},
    {key:6, date: "30/01/22", gasto:20.00},
    {key:7, date: "5/02/22", gasto:400.00},
  ])

  const[ingresos, setIngresos] = useState([
    {key:1, date: "20/01/23", ingreso:100.00},
    {key:2, date: "22/02/23", ingreso:210.00},
    {key:3, date: "24/08/22", ingreso:3.00},
    {key:4, date: "22/02/22", ingreso:54.00},
    {key:5, date: "15/03/22", ingreso:250.00},
    {key:6, date: "30/01/22", ingreso:60.00},
    {key:7, date: "5/02/22", ingreso:150.00},
  ])


  const tableHead = ['Gastos', 'Ingresos']

  const Item = ({ ingreso }) => (
    <View >
      <Text >{ingreso}</Text>
    </View>
  );

  const renderItemIngreso = ({ item }) => (
    <Item title={item.ingreso} />
  );


  //agregar gastos / ingresos
  //ver gastos / ingresos
  //ver saldo total
  return (
    <ScrollView style={styles.container_general}>
      
      <View style={styles.botones}>
        <Pressable style={styles.button} >
          <Text style={[styles.text,{color:'white'}]}>Agregar Gasto</Text>
        </Pressable>
        <Pressable style={styles.button} >
          <Text style={[styles.text,{color:'white'}]}>Agregar Ingreso</Text>
        </Pressable>
      </View>
      

      <View style={styles.container}>
        <Text style={styles.tituloGrafica}>Saldo desplegado</Text>
        <Image  style={styles.image} source={require("../assets/grafica_finanzas.png")}/>
      </View>

      <View style={styles.container}>
        <Table style={styles.tabla} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          
        </Table>
        <FlatList
        data={gastos}
        renderItem={renderItemIngreso}
        keyExtractor={item => item.key}
        />
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
    marginVertical: 20,
  },
  botones:{
    flex: 1,
    marginVertical: 20,
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "flex-start",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    color: 'white',
    backgroundColor: '#3D56B2'
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
  tabla:{
    width: '85%'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


export default Finanzas;