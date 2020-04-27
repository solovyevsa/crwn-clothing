import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsUqeOQOQyctddTpFe9gg5zDFAZmoUvRs",
    authDomain: "crwn-db-slv01.firebaseapp.com",
    databaseURL: "https://crwn-db-slv01.firebaseio.com",
    projectId: "crwn-db-slv01",
    storageBucket: "crwn-db-slv01.appspot.com",
    messagingSenderId: "375434796820",
    appId: "1:375434796820:web:b5bf5645f08ec2021b6c01",
    measurementId: "G-1XSP60B8TX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithRedirect(provider);

  export default firebase;
