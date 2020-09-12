import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDziNZQbNPK_6k8w7rmVMSZKZ6UqF4IOuc",
    authDomain: "challenge-e7180.firebaseapp.com",
    databaseURL: "https://challenge-e7180.firebaseio.com",
    projectId: "challenge-e7180",
    storageBucket: "challenge-e7180.appspot.com",
    messagingSenderId: "357761914607",
    appId: "1:357761914607:web:0eae216bb33276d6542d1a",
    measurementId: "G-H3DX13D433"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };