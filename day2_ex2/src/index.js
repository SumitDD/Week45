import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const info = [
  {id: "rendering", title:"Rendering with React",info:"Hej med dig"},
  {id: "components", title:"components",info:"Fis af med dig"},
  {id: "props-v-state", title:"Props v. State",info:"Orale habibi"},
  {id: "props-v-state", title:"Props v. State",info:"Orale habibi"},
  {id: "Basics of React", title:"React",info:"Basics"}
]


ReactDOM.render(
  <React.StrictMode>
    <App info={info}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
