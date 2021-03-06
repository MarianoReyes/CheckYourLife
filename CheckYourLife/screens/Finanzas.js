import React, { useState, useEffect } from 'react';
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
    {date:'2022-05-20', gasto:210.00},
    {date:'2022-05-20', gasto:200.00},
    {date:'2022-05-20', gasto:5.00},
    {date:'2022-05-20', gasto:40.00},
    {date:'2022-05-20', gasto:300.00},
    {date:'2022-05-20', gasto:20.00},
    {date:'2022-05-20', gasto:400.00},
  ])

  const[ingresos, setIngresos] = useState([
    {date:'2022-04-21', ingreso:100.00},
    {date:'2022-04-21', ingreso:210.00},
    {date:'2022-04-21', ingreso:3.00},
    {date:'2022-04-21', ingreso:54.25},
    {date:'2022-04-21', ingreso:250.00},
    {date:'2022-04-21', ingreso:60.00},
    {date:'2022-04-21', ingreso:150.00},
  ])

  const[ingresosData, setIngresosData] = useState(ingresos.map((ingreso)=>{return ingreso.ingreso}))
  const[gastosData, setGastosData] = useState(gastos.map((gasto)=>{return gasto.gasto}))

  const[sumIngreso, setSumIngreso] = useState(ingresos.map((ingreso) => ingreso.ingreso)
  .reduce((previous, current) => {
    return previous + current;
  }, 0))

  const[sumGasto, setSumGasto] = useState(gastos.map((gasto) => gasto.gasto)
  .reduce((previous, current) => {
    return previous + current;
  }, 0))

  const[uid, setUid] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUid(user.uid)
      getData(user.uid)
    })
  }, [])


  const getData = async (id) => {
    const docRef = doc(db, 'users', id)
    const docSnap = await getDoc(docRef)
    setIngresos((docSnap.data()).ingresos)
    setGastos((docSnap.data()).gastos)  
  }

  

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

      onAuthStateChanged(auth, (user) => {
        const docRef = doc(db, 'users', user.uid)
        updateDoc(docRef, {
          gastos: arrayUnion(gasto),
        })
      })
      
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

      onAuthStateChanged(auth, (user) => {
        const docRef = doc(db, 'users', user.uid)
        updateDoc(docRef, {
          ingresos: arrayUnion(ingreso),
        })
      })
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
                data: [
                  gastos.map((gasto) => gasto.gasto)
                  .reduce((previous, current) => {
                    return previous + current;
                  }, 0), 
                  (ingresos.map((ingreso) => ingreso.ingreso)
                  .reduce((previous, current) => {
                    return previous + current;
                  }, 0))],
                colors: [
                  (opacity = 1) =>'#f47140',
                  (opacity = 1) =>'#36a7d9',
                ]
              },
            ],
          }}
          width={Dimensions.get('window').width - 100}
          height={220}
          yAxisLabel={'Q '}
          chartConfig={{
            backgroundColor: '#0',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            barPercentage: 2,
          }}
          fromZero={true}
          showValuesOnTopOfBars={true}
          withCustomBarColorFromData={true}
          flatColor={true}
          style={{
            marginVertical: 8,
            borderRadius: 4,
            borderColor: '#000',
            borderWidth: 1,
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
              cantidad: (gastos.map((gasto) => gasto.gasto)
              .reduce((previous, current) => {
                return previous + current;
              }, 0)),
              color: '#f47140',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Ingresos',
              cantidad: (ingresos.map((ingreso) => ingreso.ingreso)
              .reduce((previous, current) => {
                return previous + current;
              }, 0)),
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
            <Pressable style={styles.buttonn} onPress={() => guardarGasto(numberG)}>
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
            <Pressable style={styles.buttona} onPress={() => guardarIngreso(numberI)}>
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
          <Text style={[styles.border, styles.fondon]}>Gastos</Text>
          {gastos.map((gasto) => <Text style={styles.border}>Q {gasto.gasto}</Text>)}
          <Text style={[styles.border, styles.fondo]}>Total de Gastos: Q {(gastos.map((gasto) => gasto.gasto)
              .reduce((previous, current) => {
                return previous + current;
              }, 0))}</Text>
        </View>
        <View style={styles.mw50}>
          <Text style={[styles.border, styles.fondoa]}>Ingresos</Text>
          {ingresos.map((ingreso) => <Text style={styles.border} >Q {ingreso.ingreso}</Text>)}
          <Text style={[styles.border, styles.fondo]}>Total de Ingresos: Q {(ingresos.map((ingreso) => ingreso.ingreso)
              .reduce((previous, current) => {
                return previous + current;
              }, 0))}</Text>
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

  buttona: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    color: 'white',
    backgroundColor: '#36a7d9'
  },

  buttonn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    color: 'white',
    backgroundColor: '#f47140'
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

  fondoa:{
    color: 'white',
    backgroundColor: '#36a7d9'
  },

  fondon:{
    color: 'white',
    backgroundColor: '#f47140'
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