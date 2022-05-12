import React, { useState,useEffect,useLayoutEffect,useCallback } from "react";
/** 
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity,TextInput } from "react-native-gesture-handler";
*/
import {GiftedChat} from 'react-native-gifted-chat';
import {collection,addDoc,orderBy,query,onSnapshot} from "firebase/firestore";
import {auth,db} from "../firebase";
import { SafeAreaView } from "react-native-safe-area-context";






const chat = () => {
  /** 
  const [mensaj,setMensaje]= useState();
  */
  const [messages,setMessages] = useState([]);


  useLayoutEffect(() => {
    const collectionRef = collection(db, 'chats');
    const q = query(collectionRef, orderBy('createdAt','desc'));

    const unsubscribe = onSnapshot(q,snapshot => {
      console.log('snapshot');
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      )
    });
    return () => unsubscribe();
  },[]);

  const onSend = useCallback((messages =[]) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages,messages));

    const { _id,createdAt, text, user} = messages[0];
    addDoc(collection(db,'chats'),{
      _id,
      createdAt,
      text,
      user
    });
  }, []);  

  return (

    <GiftedChat 
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: auth?.currentUser?.email,
      avatar: auth?.currentUser?.photoURL,
    }}
    showAvatarForEveryMessage={'true'}
    showUserAvatar={'true'}
    listViewProps={{
      style:{
        backgroundColor:'#005C97',
      }
    }}
    placeholder={'Escribe un mensaje . . .'}
    alwaysShowSend={'true'}
    />
 
    /**
     <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.opacidad}>
          <EntypoIcon
            name="text-document-inverted"
            style={styles.task}
        ></EntypoIcon>
        </TouchableOpacity>
        
        <View style={styles.grupocolumn}>
          <Text style={styles.grupo}>GRUPO</Text>
          <Text style={styles.tareaDeEstadistica}>TAREA DE ESTADISTICA</Text>
        </View>
        
        <TouchableOpacity style={styles.opacidad}>
          <MaterialCommunityIconsIcon
            name="account-supervisor"
            style={styles.personas}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        
      </View>
      <View style={{ flex: 2, backgroundColor: "#005C97", borderRadius:10, margin:5 }} />
      <View style={styles.foot}>
        
        <View style={styles.escribir}>
          <Text style={styles.mensaje}>Escribe aquí tu mensaje. . .</Text>
        </View>
        <TouchableOpacity style={styles.opacidad}>
          <FeatherIcon name="send" style={styles.enviar}></FeatherIcon>
        </TouchableOpacity>
       
        
      </View>
      </View>

     */
      
  )
  
}

/**
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
  },
  head: {
    flexDirection:'row',
    backgroundColor: "#080872",
    margin:8,
    borderRadius:10

  },
  enviar: {
    color: "white",
    fontSize: 40,
    alignSelf:'center'
  },
  foot: {
    flexDirection:'row',
    backgroundColor: "#094a96",
    borderRadius:8,
    margin:10,
  },
  task: {
    color: "white",
    fontSize: 60,
    alignSelf:'center'
  },
  grupo: {
    color: "white",
    fontSize: 35,
    alignSelf:'center',


  },
  tareaDeEstadistica: {
    color: "white",
    fontSize: 20,
    alignSelf:'flex-starts',
    alignSelf:'center',
    alignContent:'center'
  },
  personas: {
    color: "white",
    fontSize: 60,
    alignSelf:'center'
  },
  grupocolumn: {
    margin: 'auto'
  },
  mensaje: {
    color: "white",
    fontSize: 20,
    alignSelf:'flex-starts',
    alignSelf:'center',
    alignContent:'center'
  },
  escribir: {
    margin: 'auto'
  },
  opacidad: {
    margin: 'auto'
  }
});

*/


export default chat;

 