import React from 'react';
import ReactDOM from 'react-dom';

// react router
import {BrowserRouter, HashRouter} from 'react-router-dom'

import './index.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// Obal celu apku do BrowserRouter, vsade v nej budem moct pouzivat dalsie komponenty react-routera
// Ak chces hashoidne  linky, pouzi HashRouter
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    {/* <HashRouter>
        <App/>
    </HashRouter> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);


