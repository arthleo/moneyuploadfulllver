import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBuhnA0FkbWCAjekaklU-BarhXSM6dC5Rg",
  authDomain: "projectfull31.firebaseapp.com",
  projectId: "projectfull31",
  storageBucket: "projectfull31.appspot.com",
  messagingSenderId: "34769445727",
  appId: "1:34769445727:web:51fc8e2abc5e686ab48cea",
  measurementId: "G-EMYGM48B01"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }