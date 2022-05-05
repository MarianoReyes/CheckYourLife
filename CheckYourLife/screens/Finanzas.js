import React, { useState } from 'react';
import {Text, SafeAreaView, View, Pressable , StyleSheet, Image, ScrollView, FlatList } from 'react-native';
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

const screenWidth = Dimensions.get("window").width;

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
    {key:4, date: "22/02/22", ingreso:54.25},
    {key:5, date: "15/03/22", ingreso:250.00},
    {key:6, date: "30/01/22", ingreso:60.00},
    {key:7, date: "5/02/22", ingreso:150.00},
  ])

  const[ingresosData, setIngresosData] = useState(ingresos.map((ingreso)=>{return ingreso.ingreso}))
  const[gastosData, setGastosData] = useState(gastos.map((gasto)=>{return gasto.gasto}))

  let sumIngreso = ingresosData.map((ingreso) => ingreso)
  .reduce((previous, current) => {
    return previous + current;
  }, 0);

  let sumGasto = gastosData.map((gasto) => gasto)
  .reduce((previous, current) => {
    return previous + current;
  }, 0);
  
  

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
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Ingresos',
              cantidad: sumIngreso,
              color: '#14279B',
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
        <MyBarChart />
        <MyPieChart />
      </View>

      <View style={styles.flex}>
        <View>
          <Text style={styles.border}>Ingresos</Text>
          {ingresosData.map((ingreso) => <Text style={styles.border} >{ingreso}</Text>)}
        </View>
        <View>
          <Text style={styles.border}>Gastos</Text>
          {gastosData.map((gasto) => <Text style={styles.border}>{gasto}</Text>)}
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
  tituloGrafica: {
    fontSize: 35,
    fontWeight: 700,
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