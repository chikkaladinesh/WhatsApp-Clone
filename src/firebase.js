import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVZgiAS-R5swR8oWEeGJ1dFLu7mxDinuA",
    authDomain: "whatsapp-ef9f6.firebaseapp.com",
    projectId: "whatsapp-ef9f6",
    storageBucket: "whatsapp-ef9f6.appspot.com",
    messagingSenderId: "881542384117",
    appId: "1:881542384117:web:7a7fe675a8179f987cf8bc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;