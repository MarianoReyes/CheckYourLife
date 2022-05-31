// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8Vc2Cw2TFHfxooq-GlayNk-4kxPE8Qic',
  authDomain: 'check-your-life-8d160.firebaseapp.com',
  projectId: 'check-your-life-8d160',
  storageBucket: 'check-your-life-8d160.appspot.com',
  messagingSenderId: '829574262711',
  appId: '1:829574262711:web:3d178b998e283f66f84232',
  measurementId: 'G-24EYTZK046',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
onAuthStateChanged(auth, (user) => {
  console.log(user)
})
const storage = getStorage()
const db = getFirestore()

export { auth }
export { db }

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}

// Storage
export async function upload(file, currentUser) {
  const fileRef = ref(storage, currentUser.uid + '.png')

  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)


  updateProfile(currentUser, { photoURL },)

  alert('Uploaded file!')
}
