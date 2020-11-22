import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Nav from './components/Home/Nav';
import Header from './components/Home/Header';
import Signup from "./components/signup"
import Signuporg from "./components/signuporg"
import Event from "./components/Home/event/event"
import Login from './components/LogIn';
import About from './components/about';
import Footer from './components/Home/Footer';
import EventForm from './components/Home/event/EventForm'


class App extends Component {
  state = {
    name: '',
    email: '',
    orgId: localStorage.getItem('orgId'),
    userId: localStorage.getItem('userId')
  }

  componentDidMount = () => {
    // console.log(localStorage.getItem('login'))
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'login': localStorage.getItem('login')
      }

    };
    fetch('/auth', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ name: data.name, email: data.email })
        // console.log(this.state.isOrg)
      })
  }





  render() {
    const { userId, orgId } = this.state
    // const userId = this.state.userId
    // const orgId = this.state.orgId
    // console.log(name)
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path={"/"} render={() => (<Header belal={this.state.belal} />)} />
              <Route exact path={"/login"} render={() => (!userId && !orgId) ? <Login /> : <Redirect to='/event' />} />
              <Route exact path={"/event"} render={() => (<Event orgId={orgId} userId={userId} />)} />
              <Route exact path={"/signup"} render={() => (<Signup />)} />
              <Route exact path={"/signuporg"} render={() => (<Signuporg />)} />
              <Route exact path={"/about"} render={() => (<About />)} />
              <Route exact path={"/event/EventForm"} render={() =>
                orgId ?
                  <EventForm orgId={orgId} /> : <Redirect to='/signuporg' />} />
            </Switch>
            {/* <Footer /> */}

          </BrowserRouter>
        </div>

      </div>
    )
  }


}


export default App;