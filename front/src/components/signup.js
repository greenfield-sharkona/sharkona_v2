import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
class Signup extends Component {

  state = {
    name: '',
    password: '',
    email: '',
    location: '',
    phoneNumber: '',
  }
  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
    console.log(value)
  }
  signup = (e) => {
    e.preventDefault();
    axios.post("/signupClient", this.state)
      .then((response) => {
        console.log(response)
      //after signup save the the token(login) and userid in local storage 
        localStorage.setItem('login', response.data.token)
        localStorage.setItem('userId', response.data.userId)

      })
    this.setState({
      name: '',
      password: '',
      email: '',
      location: '',
      phoneNumber: '',
    })

  }

  render() {
    // console.log(this.state)
    return (

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
           <div className="col-lg-12 text-center">
               <h2 className="section-heading text-uppercase"> sign up as a User </h2>
               <h3 className="section-subheading text-muted">let's start the magic !.</h3>
             </div>
           </div>
           <div className="row">
             <div className="col-sm-12">
              <form  id="contactForm" name="sentMessage" novalidate="novalidate">
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <input className="form-control" value= {this.state.name} onChange={this.handleChangeInput} name="name" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                     <p className="help-block text-danger"></p>
                     </div>
                     <div className="form-group">
                       <input className="form-control"   value= {this.state.phoneNumber} onChange={this.handleChangeInput}   name="phoneNumber" id="phone" type="tel" placeholder="Your phoneNumber *" required="required" data-validation-required-message="Please enter your phone number."/>
                       <p className="help-block text-danger"></p>
                     </div>
                    
                     <div className="form-group">
                      <input className="form-control"   value= {this.state.password} onChange={this.handleChangeInput}  name="password" id="password" type="password" placeholder="Your password *" required="required" data-validation-required-message="Please enter your password address."/>
                       <p className="help-block text-danger"></p>
                     </div>
                  
                   </div>
                   <div className="col-md-6">
                   <div className="form-group">
                      <input className="form-control"  value= {this.state.email}  onChange={this.handleChangeInput}  name="email" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                       <p className="help-block text-danger"></p>
                     </div>
                     <div className="form-group">
                       <input className="form-control"  value= {this.state.location}  onChange={this.handleChangeInput}  name="location" id="location" type="text" placeholder="Your Location *" required="required" data-validation-required-message="Please enter your Locaton."/>
         <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> sign up as a User </h2>
              <h3 className="wellcom">we will be happy to meet you ♥</h3><br /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">

                    <div className="form-group">
                      <input className="form-control" value={this.state.name} onChange={this.handleChangeInput} name="name" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.email} onChange={this.handleChangeInput} name="email" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>

                  </div>

                  <div className="col-md-6">

                    <div className="form-group">
                      <input className="form-control" value={this.state.location} onChange={this.handleChangeInput} name="location" id="location" type="text" placeholder="Your Location *" required="required" data-validation-required-message="Please enter your Locaton." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.password} onChange={this.handleChangeInput} name="password" id="password" type="password" placeholder="Your password *" required="required" data-validation-required-message="Please enter your password address." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>

                  <div className="col-md-6-phone">
                    <div classNam="phone">

                      <div className="form-group">
                        <input className="form-control" value={this.state.phoneNumber} onChange={this.handleChangeInput} name="phoneNumber" id="phone" type="tel" placeholder="Your phoneNumber *" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger"></p>
                      </div>

                    </div>
                  </div>

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button onClick={this.signup} id=" join us " className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Signup;
