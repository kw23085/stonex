import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App2 from './App2'
import { GoogleAuthProvider } from './ContextAPI/contextGAuth'
import reportWebVitals from './reportWebVitals'


// Header Buttons
ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <App />
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('header-btn-group')
);

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <App2 />
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('user-dashboard-container')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
