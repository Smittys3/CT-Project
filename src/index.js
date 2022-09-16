import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBRjZcA65qAcOABK2PfOgp9ORFP-tA0qPc",
    authDomain: "recipe-capstone-3463d.firebaseapp.com",
    projectId: "recipe-capstone-3463d",
    storageBucket: "recipe-capstone-3463d.appspot.com",
    messagingSenderId: "877789635711",
    appId: "1:877789635711:web:28eda69dab94d4e9804b4a",


    databaseURL: "https://recipe-capstone-3463d-default-rtdb.firebaseio.com"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const database = getDatabase(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);