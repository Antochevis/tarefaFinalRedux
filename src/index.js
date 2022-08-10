import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './routers';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
import toast, { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <Toaster />
    <Routers />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();