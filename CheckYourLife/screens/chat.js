import React, { useState,useEffect,useLayoutEffect,useCallback } from "react";

import {GiftedChat} from 'react-native-gifted-chat';
import {collection,addDoc,orderBy,query,onSnapshot} from "firebase/firestore";
import {auth,db} from "../firebase";
import { SafeAreaView } from "react-native-safe-area-context";






const chat = () => {

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
       
  )
  
}




export default chat;

 