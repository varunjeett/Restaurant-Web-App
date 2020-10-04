import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC9CLV23G0g67UsNKcjq60vK3eGzVA0yZY",
  authDomain: "bunch-o-lunch.firebaseapp.com",
  databaseURL: "https://bunch-o-lunch.firebaseio.com",
  projectId: "bunch-o-lunch",
  storageBucket: "bunch-o-lunch.appspot.com",
  messagingSenderId: "772754706495",
  appId: "1:772754706495:web:f01bbbe025e8f75029288a",
  measurementId: "G-B6W739N31G"
};

// eslint-disable-next-line
const firebaseApp=firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};
export default firebase;