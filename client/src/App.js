import React,{useEffect} from 'react';
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import{BrowserRouter as Router,Route,Switch} from "react-router-dom"
import "./App.css"
import {Provider} from "react-redux"
import store from "./store"
import AlertMessage from "./components/layout/alert"
import {loadUser} from "./actions/auth"
import setAuthToken from './util/setAuthtToken';

if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar/>
      <Route exact path ="/" component={Landing}/>
      <section className="container">
      <AlertMessage/>
      <Switch>
      <Route exact path ="/Login" component={Login}/>
      <Route exact path ="/Register" component={Register}/>
      </Switch>
      </section>
      </Router>
      </Provider>
  );
}

export default App;