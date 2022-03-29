import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'qanda-45866.firebaseapp.com',
  databaseURL: 'https://qanda-45866-default-rtdb.firebaseio.com',
  projectId: 'qanda-45866',
  storageBucket: 'qanda-45866.appspot.com',
  messagingSenderId: '64134318164',
  appId: '1:64134318164:web:b856c839c96b3dfdbf05c1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const database = firebase.database();
