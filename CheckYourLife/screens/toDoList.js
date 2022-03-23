import React, { useState } from 'react';
import { SearchBar } from "react-native-elements";
import TaskItem from "./TaskItem";
import { View,Text, StyleSheet,FlatList,ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
const GeneralColor = '#3D56B2';

const toDoList = ({ navigation }) => {

  const [shouldShowa, setShouldShowa] = useState(true);
  const [shouldShowb, setShouldShowb] = useState(true);
  const [shouldShowc, setShouldShowc] = useState(false);
  const [shouldShowd, setShouldShowd] = useState(false);
  const [shouldShowe, setShouldShowe] = useState(false);
  const [search,setSearch] = useState('');
  const [addTask,setAddTask] = useState('');
  const [data, setData] = useState([
    {key: 'Devin',
      Description:'hasbdfhaasdbfahbsdfjbhasd',completed: false,},
    {key: 'Dan',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'Dominic',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'Jackson',
        Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'James',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'Joel',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'John',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'Jillian',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'Jimmy',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'Julie',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: false,},
    {key: 'ANA',
      Description:'hasbdfhaasdbfahbsdfjbhasd',completed: true,},
    {key: 'Dan2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'Dominic2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'Jackson2',
        Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'James2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'Joel2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'John2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'Jillian2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'Jimmy2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    {key: 'Julie2',
      Description:'hasbdfhaasdbfjahbsdfjbhasd',completed: true,},
    ]);

  const handleData = (newTask) => {
    setData(
        data.map((task) =>
            // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
            task.key === newTask.key
                ? { ...task, completed: newTask.completed }
                : { ...task }
        )
    );
  };

  const onChangeSearch = query => setSearch(query);

  const onAddTask = query => setAddTask(query);

  const addTaskFunction = () => {
    addTask !== ''? setData([...data, {key:addTask, Description: '', completed: false}]) : null
    setAddTask('');
  }

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
                    if (search !== '' && item.key.includes(search)) {
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
