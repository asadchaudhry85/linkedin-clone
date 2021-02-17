import firebase from 'firebase'; 

const firebaseConfig = {
  apiKey: "AIzaSyBbjoHfJ-FpVeS1m0x_wIA2I3CgOxA6x-o",
  authDomain: "linkedin-clone-asad.firebaseapp.com",
  projectId: "linkedin-clone-asad",
  storageBucket: "linkedin-clone-asad.appspot.com",
  messagingSenderId: "1005503656515",
  appId: "1:1005503656515:web:7e6a9a75bae498bb965af6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth }; 