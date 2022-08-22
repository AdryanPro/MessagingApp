import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCHfcBjcOTFJbzjNP7UaGtAAYb2lMOm2YA",
    authDomain: "mymessaginapp-73979.firebaseapp.com",
    projectId: "mymessaginapp-73979",
    storageBucket: "mymessaginapp-73979.appspot.com",
    messagingSenderId: "887843271775",
    appId: "1:887843271775:web:aa945f7d2fc57ced2dd7ea",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };