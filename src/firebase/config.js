import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTVbkAlUQB06isRUdWM1WYiWiKjZlGqdw",
    authDomain: "fir-90342.firebaseapp.com",
    projectId: "fir-90342",
    storageBucket: "fir-90342.appspot.com",
    messagingSenderId: "1051991511249",
    appId: "1:1051991511249:web:a88f32fb7cc6a84b62f5f0",
    measurementId: "G-20E2JMYDDG"
  };


export default firebase.initializeApp(firebaseConfig)
