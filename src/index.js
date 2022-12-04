import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App'; // should this be ./App.js?
import {initializeApp} from "firebase/app";
import { Route, Routes, BrowserRouter, Outlet, Link } from 'react-router-dom'; // i think this is redundant, but can't figure out how to get it running otherwise

const firebaseConfig = {
  apiKey: "AIzaSyCgL5sBK2qLIFeDZpWifieZ8tdlQPL42F0",
  authDomain: "info442-group4-happyplace.firebaseapp.com",
  projectId: "info442-group4-happyplace",
  storageBucket: "info442-group4-happyplace.appspot.com",
  messagingSenderId: "995044704166",
  appId: "1:995044704166:web:d62f604e86f02b358a5967"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

