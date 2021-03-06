import 'core-js/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  
  lng: 'en',                              
  resources: {
      en: {
          common: common_en              
      },
      pl: {
          common: common_pl
      },
  },
});
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <I18nextProvider i18n={i18next}>
      <App/>
    </I18nextProvider>
  </Router>
</React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
