import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Nav from './components/Home/Nav';
import Header from './components/Home/Header';
import Signup from "./components/signup"
import Signuporg from "./components/signuporg"
import Event from "./components/Home/event/event"
import Login from './components/login';
import About from './components/about';
import Footer from './components/Home/Footer';


function App() {
  return (
    <div className="App">
      <div> 
      <BrowserRouter>
        <Nav />
        <Switch>
        <Route exact path={"/"} component={Header}></Route>
        <Route exact path={"/login"} component={Login}></Route>
        <Route  path={"/event"} component={Event}></Route>
        <Route  path={"/signup"} component={Signup}></Route>
        <Route  path={"/signuporg"} component={Signuporg}></Route>
        <Route  path={"/about"} component={About}></Route>
        {/* <Route  path = {"/event"} component={Event}></Route> */}
      </Switch>
      <Footer />
              
      </BrowserRouter>
        </div>

</div> 
  )
}

  
export default App;
