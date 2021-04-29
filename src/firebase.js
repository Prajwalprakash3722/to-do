import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCe_UkwKEp2jhjBwG4gILqp-Hhc9QT4pSs",
  authDomain: "to-do-app-5bc9c.firebaseapp.com",
  projectId: "to-do-app-5bc9c",
  storageBucket: "to-do-app-5bc9c.appspot.com",
  messagingSenderId: "493146048822",
  appId: "1:493146048822:web:78a3e43e3dc8cf06850b97",
  measurementId: "G-DDJCQFWEHC",
});

const DB = firebaseApp.firestore();

export default DB;
