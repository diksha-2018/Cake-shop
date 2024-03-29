import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./components/Form"
import Login from "./components/Login"
import ResultsComponent from "./components/Results";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path="/signup" element={<Form/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route path="/results" element={<ResultsComponent/>} />
            <Route path="/home" element={<Home/>} />
         </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
