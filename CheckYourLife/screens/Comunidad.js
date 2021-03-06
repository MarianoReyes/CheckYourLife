import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import Ex from "react-native-vector-icons/Feather";
import Ag from "react-native-vector-icons/Ionicons";
import { FlatList, State, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SearchBar } from "react-native-elements";
import {collection,addDoc,deleteDoc,query,onSnapshot, doc,deleteField} from "firebase/firestore";
import {auth,db} from "../firebase";



const comunidad = ({navigation}) => {

  const [grupo,setGrupo]= useState();
  const onPress = ()=> navigation.navigate('CHAT')
  const [exampleState, setExampleState] = useState(DATA);
  const [search,setSearch] = useState('');


  const collectionRef = collection(db, 'grupos');
  const q = query(collectionRef);


  const [DATA, changeEl]  = useState([ ]);
  

  async function loadData(){
    


    const unsubscribe = onSnapshot(q,snapshot => {
      const productos =[]

      snapshot.forEach(snapshot => {
        productos.push({
          ...snapshot.data(),
          key: snapshot.id
        })
      })

      changeEl(productos)

    })
    
    return () => unsubscribe();

  }

  useEffect(() =>{
    loadData()
  }, [])
  

  const addElement = () => {
    addDoc(collection(db,'grupos'),{
      title: grupo,
    });
    setGrupo('')
    
  }



  const deleteElement = (key)=>{

    deleteDoc(doc(db, "grupos", key.toString()));
  };

  


  
  const searchFilterFunction = (text) => {
   
    setSearch(text);
  }



  const Item = ({ item }) => {
    
     return (
      <View style={styles.boton}>
      
        <View style={styles.grupo}>
            <Text style={styles.titles} >{item.title}  </Text>
        </View>
        <TouchableOpacity onPress={onPress} >
          <View style={styles.persona} >
            <Icon1 name="message1" style={styles.icon1} >  </Icon1>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => deleteElement(item.key)}>
          <View style={styles.persona} >
            <Ex name="x-circle" style={styles.icon2} >  </Ex>
          </View>
        </TouchableOpacity>
      
      </View>  
     ) 
    
  
  }


  return(

    <SafeAreaView style={styles.container}>
      <View >
        <SearchBar
        style={styles.search}
        placeholder="Busca Aqui..." 
        placeholderTextColor={'#094a96'}
        value={search}
        inputContainerStyle={{backgroundColor:'white' }}
        lightTheme
        containerStyle={{backgroundColor:'#094a96'}}
        onChangeText={(text) => searchFilterFunction(text)}
        
        />
      
      
      </View>

      <FlatList
      data ={DATA}
      keyExtractor = {item => item.key}
      renderItem={({item}) => 
        {
          if (search !== '' && item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return <Item item={item}></Item>
          }
          if (search == ''){
            return <Item item={item}></Item>
          }
          
        }}
      />


      <View style= {styles.foot}>
        <View style= {styles.agregar}>
          
          <TextInput style={styles.ingreso} placeholder={'Crear Nuevo Grupo' } placeholderTextColor={'white'}   value={grupo} onChangeText={text => setGrupo(text)}/>
          
        </View>
        <TouchableOpacity onPress={addElement} >
          <View style={styles.botonag}>
            <Ag name="ios-add-circle-outline" style={styles.icon1} >  </Ag>
          </View>
        </TouchableOpacity>
          
        
        
        
      </View>


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
  titles: {
    fontSize: 25,
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
  icon2: {
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
    
  },
  foot:{
    flexDirection:'row',
    backgroundColor: "#094a96",
    borderRadius:8,
    margin:10,

  },
  agregar:{
    margin: 'auto',
  },
  ingreso:{
    color: "white",
    fontSize: 20,
    alignSelf:'flex-starts',
    alignSelf:'center',
    alignContent:'center'
  },
  botonag:{
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  search:{
    color: "#094a96",
  }

});

export default comunidad;