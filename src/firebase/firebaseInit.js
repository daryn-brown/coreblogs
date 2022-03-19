import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMBbpGMfAwCM0jMgrLq3mtxeev8a_zWeg",
  authDomain: "coreblogs-b7866.firebaseapp.com",
  projectId: "coreblogs-b7866",
  storageBucket: "coreblogs-b7866.appspot.com",
  messagingSenderId: "858105504573",
  appId: "1:858105504573:web:ba9f0be5062bedbbca1b54",
  measurementId: "G-3M6859SK2L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();

