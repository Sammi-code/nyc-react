import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from './components/reducer/store';
import Land from "./components/pages/Land";
import SignUp from "./components/pages/SignUp";
import NavBar from "./sidebars/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(

  <React.StrictMode>
   
    <Provider store={store}>
      <Router>
      <Route exact path="/"  component={App} />
     
        <Switch>
        <Route  path="/login" component={SignUp} />
          <Route  path="/userpage" component={NavBar} />
         
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
