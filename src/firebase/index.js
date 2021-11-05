import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCLy9OnNHhefdg-xsliUbFl9jtTnAhmKaw",
  authDomain: "litstore-2c06c.firebaseapp.com",
  projectId: "litstore-2c06c",
  storageBucket: "litstore-2c06c.appspot.com",
  messagingSenderId: "407270471400",
  appId: "1:407270471400:web:e7dc2c1d9391abcd8c7b5d"
    }

)

export const getFirebase = () => {
    return app;
}

// vinculacion a la base de datos
export const getFirestore = () => {
    return firebase.firestore(); 
} 