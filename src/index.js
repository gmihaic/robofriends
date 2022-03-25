import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello'
//import Card from './Card'
//import CardList from './CardList'
import App2 from "./containers/App2";
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //bootstrap like styles
//import { robots, cats } from './robots.js'

//<App />
ReactDOM.render(
  <React.StrictMode>       
      {/*<CardList robots={robots} />    */ }
      {/*<App/>*/ }
      <App2/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
