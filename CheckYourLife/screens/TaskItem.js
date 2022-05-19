import React, { useState } from 'react'
import {
  Pressable,
  Text,
  StyleSheet,
  Modal,
  View,
  TextPropTypes,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

const TaskItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.item}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {props.item.important ? (
              <AntDesign name="star" size={40} color="#3D56B2" />
            ) : null}
            <Text style={styles.modalTitle}>{props.item.title}</Text>
            <Text style={styles.modalDescription}>
              {props.item.description}
            </Text>
            {props.item.expiration.length > 2 ? (
              <Text style={styles.modalDescription}>
                Fecha de Expiración: ({props.item.expiration[0]}/
                {props.item.expiration[1]}/{props.item.expiration[2]})
              </Text>
            ) : null}
            {props.item.completed ? (
              <MaterialCommunityIcons
                name="check-box-outline"
                size={32}
                color="#3D56B2"
              />
            ) : null}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Regresar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <LinearGradient
        colors={[
          'rgba(20,39,155,1)',
          props.item.completed ? 'rgba(9,10,61,1)' : 'rgba(82,170,834,1)',
        ]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <MaterialCommunityIcons
          onPress={() => {
            props.fun({
              title: props.item.title,
              description: props.item.description,
              expiration: props.item.expiration,
              important: props.item.completed,
              completed: !props.item.completed,
            })
          }}
          name={
            props.item.completed == true
              ? 'check-box-outline'
              : 'checkbox-blank-outline'
          }
          size={32}
          color="white"
        />
        <View
          style={styles.taskcontent}
          onTouchStart={() => {
            setModalVisible(true)
          }}
        >
          <Text style={styles.text}>{props.item.title}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    marginVertical: 2,
    marginHorizontal: 5,
    //background: "linear-gradient(135deg, rgba(20,39,155,1) 0%, rgba(92,122,234,1) 100%)",
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  taskcontent: {
    marginLeft: 20,
    flex: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  linearGradient: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 18,
    width: '100%',
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    minWidth: 250,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: '#3D56B2',
    color: 'white',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D56B2',
  },
  modalDescription: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#3D56B2',
  },
  buttonText: {
    color: 'white',
  },
})

export default TaskItem
