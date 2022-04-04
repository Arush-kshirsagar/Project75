import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlmBApE6Zzw-uHLst0pFEK9YsQyb-_rrM",
  authDomain: "e-bike-rider-4.firebaseapp.com",
  projectId: "e-bike-rider-4",
  storageBucket: "e-bike-rider-4.appspot.com",
  messagingSenderId: "259644441739",
  appId: "1:259644441739:web:74602ed1aae1d01933c08e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
