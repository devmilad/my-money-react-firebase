import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyAT6aRMG_tSQ296h-7pj7Zbi1-_r6HEA1k",
    authDomain: "mymoney-e0434.firebaseapp.com",
    projectId: "mymoney-e0434",
    storageBucket: "mymoney-e0434.appspot.com",
    messagingSenderId: "782589302317",
    appId: "1:782589302317:web:22855dac71a234eba00aa4"
  };


//   ! init firebase
firebase.initializeApp(firebaseConfig)

// ! init services
const projectFirestore = firebase.firestore()
const projectAuth=firebase.auth()

// !timestamps

const timestamp=firebase.firestore.Timestamp

export { projectFirestore ,projectAuth, timestamp}