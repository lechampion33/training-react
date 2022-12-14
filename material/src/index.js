import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Lifecycle from './Lifecycle';
import App from './App';
// import Error from './error';
import reportWebVitals from './reportWebVitals';
import RegisterForm from './component/form'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Lifecycle/> */}
    {/* <App/> */}
    <RegisterForm />
    {/* <Error /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
