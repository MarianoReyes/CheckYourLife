// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Vc2Cw2TFHfxooq-GlayNk-4kxPE8Qic",
  authDomain: "check-your-life-8d160.firebaseapp.com",
  projectId: "check-your-life-8d160",
  storageBucket: "check-your-life-8d160.appspot.com",
  messagingSenderId: "829574262711",
  appId: "1:829574262711:web:3d178b998e283f66f84232",
  measurementId: "G-24EYTZK046"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
