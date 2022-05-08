import React, { useState } from 'react';
import { SearchBar } from "react-native-elements";
import TaskItem from "./TaskItem";
import { View,Text, StyleSheet,FlatList,ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const GeneralColor = '#3D56B2';

const toDoList = ({ navigation, route }) => {

  const [shouldShowa, setShouldShowa] = useState(true);
  const [shouldShowb, setShouldShowb] = useState(true);
  const [shouldShowc, setShouldShowc] = useState(false);
  const [shouldShowd, setShouldShowd] = useState(false);
  const [shouldShowe, setShouldShowe] = useState(false);
  const [search,setSearch] = useState('');
  const [addTask,setAddTask] = useState('');
  const [data, setData] = useState([
      {
        title: 'Hacer BD',
        description: 'Proyecto de BD',
        expiration: [22,5,2022],
        notificationDateTime: [],
        important: true,
        completed: false,
    },
    {
      title: 'Hacer HCI',
      description: 'Proyecto de HCI',
      expiration: [],
      notificationDateTime: [],
      important: true,
      completed: false,
    },
    {
      title: 'Hacer TP',
      description: 'Estudiar para examen de TP',
      expiration: [],
      notificationDateTime: [],
      important: true,
      completed: false,
    },{
      title: 'Recoger Hojas del Patio',
      description: '',
      expiration: [],
      notificationDateTime: [],
      important: true,
      completed: false,
    },
    ]);

  const handleData = (newTask) => {
    setData(
        data.map((task) =>
        task.title === newTask.title
                ? { ...task, completed: newTask.completed }
                : { ...task }
        )
    );
  };

  const onChangeSearch = query => setSearch(query);

  const onAddTask = query => setAddTask(query);

  const addTaskFunction = () => {
    if (!checkContains(addTask)) {
      addTask !== ''? addData({title:addTask, description: '', completed: false, expiration: [], notificationDateTime: [], important: false,}) : null
    }
    setAddTask('');
  }

  const checkContains = (title) => {
    var found = false;
    data.map((element) => {
      if (element.title === title) {
        found = true
      } 
    })
    return found;
  }

  const addData = (info) => {
    setData([...data, info])
  }

  route.params? route.params.newTask? !checkContains(route.params.newTask.title)? addData(route.params.newTask): undefined : undefined : undefined;
  route.params? route.params.newTask = undefined : undefined;

  return (
    <ScrollView>
      <View style={styles.SorA}>
         <AntDesign style={styles.subvars} onPress={() => {setShouldShowc(!shouldShowc); setShouldShowd(false); setShouldShowe(false)}}  name={'search1'} size={shouldShowc ? 35 : 25} color={GeneralColor} />
         <AntDesign style={styles.subvars} onPress={() => {setShouldShowd(!shouldShowd); setShouldShowc(false); setShouldShowe(false)}} name={'plus'} size={shouldShowd ? 35 : 25} color={GeneralColor} />
         <Feather style={styles.subvars} onPress={() => {navigation.navigate('AddItem'); setShouldShowc(false); setShouldShowd(false)}} name={'more-horizontal'} size={25} color={GeneralColor} />
         </View>
         {shouldShowc ? (
           <View>
            <SearchBar
              inputStyle={{backgroundColor: 'white'}}
              containerStyle={{backgroundColor: 'white',}}
              inputContainerStyle={{backgroundColor: 'white'}}
              placeholder="Search Here..."
              lightTheme
              round
              value={search}
              onChangeText={(text) => onChangeSearch(text)}
              autoCorrect={false}
            /> 
            <FlatList
                data={data}
                initialNumToRender = {data.length}
                renderItem={({item}) => {
                    if (search !== '' && item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                      return <TaskItem fun={handleData} item={item}/>
                    }
                }}
              />
          </View>
        ) : null}
        {shouldShowd ? (
        <View>
          <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white',}}
            inputContainerStyle={{backgroundColor: 'white'}}
            placeholder="Add Task..."
            lightTheme
            round
            value={addTask}
            onChangeText={(text) => onAddTask(text)}
            autoCorrect={false}
          />
          <Pressable style={styles.boton} onPress={() => addTaskFunction()}>
            <Text style={styles.text}>Agregar</Text>
        </Pressable>
        </View>
        ) : null}
        <Text onPress={() => setShouldShowa(!shouldShowa)} style={styles.finder}>NO COMPLETADOS <AntDesign name={shouldShowa ? "upcircle" : "downcircle"} size={18} color={GeneralColor} /></Text>
          {shouldShowa ? (
            <FlatList
            data={data}
            inverted
            initialNumToRender = {data.length}
            renderItem={({item}) => {
                if (!item.completed) {
                  return <TaskItem fun={handleData} item={item}/>
                }
            }}
          />
          ) : null}
      <Text onPress={() => setShouldShowb(!shouldShowb)} style={styles.finder}>COMPLETADOS <AntDesign name={shouldShowb ? "upcircle" : "downcircle"} size={18} color={GeneralColor} /></Text>
        {shouldShowb ? (
            <FlatList
            data={data}
            inverted
            initialNumToRender = {data.length}
            renderItem={({item}) => {
              if (item.completed) {
                return <TaskItem fun={handleData} item={item}/>
              }
          }}
          />
          ) : null}
    </ScrollView>
  

  );
};

const styles = StyleSheet.create({
  finder: {
    fontSize:20,
    fontWeight:"bold",
    color: GeneralColor,
    textAlign: 'center',
    marginVertical: 5,
  },
  SorA : {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
  },
  subvars : {
    marginHorizontal:10,
    marginVertical:10,
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    //elevation: 3,
    backgroundColor: GeneralColor,
    marginHorizontal:10,
    marginVertical:10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  });


export default toDoList;
