import React, { useState } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { LinearGradient } from 'expo-linear-gradient'

const GeneralColor =
  'linear-gradient(135deg, rgba(20,39,155,1) 0%, rgba(92,122,234,1) 100%)'

const addTask = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [info, setInfo] = useState({
    title: '',
    description: '',
    expiration: [],
    important: false,
    completed: false,
  })

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }
  const hideDatePicker = () => {
    setDatePickerVisibility(false)
    setDateTimePickerVisibility(false)
  }

  const updateImportance = (newState) =>
    setInfo((prevState) => ({
      title: prevState.title,
      description: prevState.description,
      expiration: prevState.expiration,
      important: newState,
      completed: prevState.completed,
    }))
  const updateTitle = (newState) => {
    setInfo((prevState) => ({
      title: newState,
      description: prevState.description,
      expiration: prevState.expiration,
      important: prevState.important,
      completed: prevState.completed,
    }))
  }
  const updateDescription = (newState) =>
    setInfo((prevState) => ({
      title: prevState.title,
      description: newState,
      expiration: prevState.expiration,
      important: prevState.important,
      completed: prevState.completed,
    }))
  const updateExpiration = (date) => {
    setInfo((prevState) => ({
      title: prevState.title,
      description: prevState.description,
      expiration: [
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
      ],
      important: prevState.important,
      completed: prevState.completed,
    }))
  }

  return (
    <ScrollView height="100%">
      <LinearGradient
        colors={['rgba(20,39,155,1)', 'rgba(92,122,234,1)']}
        style={styles.linearGradient}
      >
        <View style={styles.star}>
          <AntDesign
            name={info.important ? 'star' : 'staro'}
            onPress={() => {
              updateImportance(!info.important)
            }}
            size={40}
            color="white"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.titles}>NOMBRE</Text>
          <TextInput
            maxLength={50}
            style={styles.input}
            value={info.title}
            onChangeText={(text) => updateTitle(text)}
            placeholder=""
          ></TextInput>
        </View>
        <View style={styles.container}>
          <Text style={styles.titles}>DESCRIPCIÓN</Text>
          <TextInput
            multiline
            maxLength={150}
            style={styles.input2}
            placeholder=""
            value={info.description}
            onChangeText={(text) => updateDescription(text)}
          ></TextInput>
        </View>
        <View style={styles.container}>
          <Text style={styles.titles}>Expiración</Text>
          <Pressable style={styles.boton} onPress={showDatePicker}>
            <Text style={styles.text}>Elegir Fecha de Expiración</Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(e) => {
              hideDatePicker()
              updateExpiration(e)
            }}
            onCancel={hideDatePicker}
          />
        </View>
        <Pressable
          style={styles.boton}
          onPress={() =>
            navigation.navigate(
              'To Do List',
              info.title ? { newTask: info } : undefined
            )
          }
        >
          <Text style={styles.text}>Agregar </Text>
        </Pressable>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'transparent',
    padding: 10,
  },
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  input: {
    height: 60,
    backgroundColor: 'white',
    marginVertical: 10,
    width: '80%',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  input2: {
    height: 100,
    backgroundColor: 'white',
    marginVertical: 10,
    width: '80%',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  star: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: GeneralColor,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
})

export default addTask
