import React, { useState } from 'react';
import {Text, SafeAreaView, View, Pressable , StyleSheet, Image, ScrollView, FlatList, TextInput, Button } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Table, Row, Rows } from 'react-native-table-component';
import TaskItem from "./TaskItem";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { auth, db } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {
  doc,
  getDoc,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'

const screenWidth = Dimensions.get("window").width;

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
    {date: "22/02/22", ingreso:54.25},
    {date: "15/03/22", ingreso:250.00},
    {date: "30/01/22", ingreso:60.00},
    {date: "5/02/22", ingreso:150.00},
  ])

  const[ingresosData, setIngresosData] = useState(ingresos.map((ingreso)=>{return ingreso.ingreso}))
  const[gastosData, setGastosData] = useState(gastos.map((gasto)=>{return gasto.gasto}))

  const[sumIngreso, setSumIngreso] = useState(ingresosData.map((ingreso) => ingreso)
  .reduce((previous, current) => {
    return previous + current;
  }, 0))

  const[sumGasto, setSumGasto] = useState(gastosData.map((gasto) => gasto)
  .reduce((previous, current) => {
    return previous + current;
  }, 0))

  const [numberI, setNumberI] = useState(0)
  const [numberG, setNumberG] = useState(0)

  const guardarGasto = (number) => {

    if(number && number > 0){
      let today = new Date();
      let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
      number=parseFloat(number)

      var gasto={date:date,gasto:number}
      console.log(gasto)

      gastos.push(gasto)
      setGastosData(gastos.map((gasto)=>{return gasto.gasto}))
      setSumGasto(gastosData.map((gasto) => gasto)
      .reduce((previous, current) => {
        return previous + current;
      }, 0))
      setNumberG(0)
    }
    
  }

  const guardarIngreso = (number) => {
    if(number && number > 0){
      let today = new Date();
      let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
      number=parseFloat(number)

      var ingreso={date:date,ingreso:number}
      console.log(ingreso)

      ingresos.push(ingreso)
      setIngresosData(ingresos.map((ingreso)=>{return ingreso.ingreso}))
      setSumIngreso(ingresosData.map((ingreso) => ingreso)
      .reduce((previous, current) => {
        return previous + current;
      }, 0))
      setNumberI(0)
    }
  }

  const MyBarChart = () => {
    return (
      <>
        <BarChart
          data={{
            labels: ['Gastos', 'Ingresos'],
            datasets: [
              {
                data: [sumGasto, sumIngreso],
              },
            ],
          }}
          width={Dimensions.get('window').width - 100}
          height={220}
          yAxisLabel={'Q '}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#14279B',
            backgroundGradientTo: '#5C7AEA',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            barPercentage: 2,
          }}
          fromZero={true}
          style={{
            marginVertical: 8,
            borderRadius: 4,
          }}
        />
      </>
    );
  };

  const MyPieChart = () => {
    return (
      <>
        <PieChart
          data={[
            {
              name: 'Gastos',
              cantidad: sumGasto,
              color: '#f47140',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Ingresos',
              cantidad: sumIngreso,
              color: '#36a7d9',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            }
          ]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="cantidad"
          backgroundColor="transparent"
          paddingLeft="15"
          
        />
      </>
    );
  };

  return (
    <ScrollView style={styles.container_general}>
      
      <View style={[styles.container, styles.mw100]}>
        <Text>Si desea agregar un nuevo Gasto o Ingreso ingreselo y pulse el boton para registrarlo</Text>
      
        <View style={[styles.flex, styles.mw100]}>

          <View styles={styles.mw50}>
            <TextInput 
              style={styles.input}
              onChangeText={newnumber => setNumberG(newnumber)}
              placeholder= "Ingrese un dato"
              keyboardType="numeric"
              value = {numberG}
            />
            <Pressable style={styles.button} onPress={() => guardarGasto(numberG)}>
              <Text style={[styles.text,{color:'white'}]}>Agregar Gasto</Text>
            </Pressable>
          </View>

          <View styles={styles.mw50}>
            <TextInput 
              style={styles.input}
              onChangeText={newnumber => setNumberI(newnumber)}
              placeholder= "Ingrese un dato"
              keyboardType="numeric" 
              value = {numberI}
            />
            <Pressable style={styles.button} onPress={() => guardarIngreso(numberI)}>
              <Text style={[styles.text,{color:'white'}]}>Agregar Ingreso</Text>
            </Pressable>
          </View>

        </View>
      </View>
      

      <View style={styles.container}>
        <Text style={styles.tituloGrafica}>Saldo desplegado</Text>
        <MyBarChart/>
        <MyPieChart/>
      </View>

      <View style={[styles.flex2, styles.mw100]}>
        <View style={styles.mw50}>
          <Text style={[styles.border, styles.fondo]}>Gastos</Text>
          {gastosData.map((gasto) => <Text style={styles.border}>Q {gasto}</Text>)}
          <Text style={[styles.border, styles.fondo]}>Total de Gastos: Q {sumGasto}</Text>
        </View>
        <View style={styles.mw50}>
          <Text style={[styles.border, styles.fondo]}>Ingresos</Text>
          {ingresosData.map((ingreso) => <Text style={styles.border} >Q {ingreso}</Text>)}
          <Text style={[styles.border, styles.fondo]}>Total de Ingresos: Q {sumIngreso}</Text>
        </View>
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
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row'
  },
  flex2: {
    justifyContent: 'center',
    alignItems: 'start',
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row'
  },
  mw100: {
    maxWidth: '100%',
    marginHorizontal: 10
  },
  mw90: {
    maxWidth: '90%',
    marginHorizontal: 10
  },
  mw50: {
    maxWidth: '50%',
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
    backgroundColor: '#14279B'
  },
  input:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  fondo:{
    color: 'white',
    backgroundColor: '#14279B'
  },
  tituloGrafica: {
    fontSize: 35,
    fontWeight: 600,
    marginVertical: 15
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
  text: { margin: 6 },
  border: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    alignSelf: 'stretch',
  },
});


export default Finanzas;