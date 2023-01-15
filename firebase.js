// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "virtual-wardrobe-564c0.firebaseapp.com",
  projectId: "virtual-wardrobe-564c0",
  storageBucket: "virtual-wardrobe-564c0.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
  }
  const storage = firebase.storage();
  const auth = firebase.auth();

export { firebase, storage, auth };
