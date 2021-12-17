// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyANa6klUbRh5HJj-Ed9TRvbh2dEFMLw-h0",
//   authDomain: "todo-app-b7b38.firebaseapp.com",
//   projectId: "todo-app-b7b38",
//   storageBucket: "todo-app-b7b38.appspot.com",
//   messagingSenderId: "646176490704",
//   appId: "1:646176490704:web:a231ebcabdd82c2905cad5",
//   measurementId: "G-RBNDZDF625",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANa6klUbRh5HJj-Ed9TRvbh2dEFMLw-h0",
  authDomain: "todo-app-b7b38.firebaseapp.com",
  projectId: "todo-app-b7b38",
  storageBucket: "todo-app-b7b38.appspot.com",
  messagingSenderId: "646176490704",
  appId: "1:646176490704:web:a231ebcabdd82c2905cad5",
  measurementId: "G-RBNDZDF625",
});

const db = firebaseApp.firestore();

export default db;
