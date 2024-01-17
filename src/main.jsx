import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import './index.css'
import addTRLocale from "./calendar-tr.js";

addTRLocale();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
