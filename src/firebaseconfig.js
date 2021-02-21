import firebase from "firebase"
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAdJU8NW0xw220UBODhs6EUnhzFORuBwMI",
  authDomain: "prueba-react-6c6d3.firebaseapp.com",
  projectId: "prueba-react-6c6d3",
  storageBucket: "prueba-react-6c6d3.appspot.com",
  messagingSenderId: "727511814872",
  appId: "1:727511814872:web:f0129fa2ece22a258dfdad",
  measurementId: "G-E6RZLVGTYK"
};

 

  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();

  export {auth}