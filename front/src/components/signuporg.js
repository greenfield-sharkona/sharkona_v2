import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"


class Signuporg extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    location: '',
    phoneNumber: ''
  }
  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
    // console.log(e.target)
  }
  signup = (e) => {
    e.preventDefault();
    axios.post("/signupCompany", this.state)
      .then((response) => {
        localStorage.setItem('login', response.data.token)
        localStorage.setItem('orgId', response.data.orgId)
        console.log(response)
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

    return (
 
        <section className="page-section" id="contact">
            <div className="container">
              <div className="row">
               <div className="col-lg-12 text-center">
                   <h2 className="section-heading text-uppercase"> sign up asorganizer </h2>
                   <h3 className="section-subheading text-muted">let's start the magic !.</h3>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-12">
                  <form id="contactForm" name="sentMessage" novalidate="novalidate">
                     <div className="row">
                       <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control"  value= {this.state.name} onChange={this.handleChangeInput} name="name" id="email" type="text" placeholder="Your Company Name *" required="required" data-validation-required-message="Please enter your Company Name ."/>
                           <p className="help-block text-danger"></p>
                         </div>
                        
                        
                         <div className="form-group">
                           <input className="form-control" value= {this.state.phoneNumber} onChange={this.handleChangeInput}   name="phoneNumber" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                           <p className="help-block text-danger"></p>
                         </div>
                         <div className="form-group">
                           <input className="form-control" value= {this.state.location}  onChange={this.handleChangeInput}  name="location" id="name" type="text" placeholder="Your Locationn  *" required="required" data-validation-required-message="Please enter your Locaton."/>
                   <p className="help-block text-danger"></p>
                         </div>
                         
            
                       </div>
                       <div className="col-md-6">
                       <div className="form-group">
                          <input className="form-control" id="email" type="email" value= {this.state.email}  onChange={this.handleChangeInput}  name="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                           <p className="help-block text-danger"></p>
                         </div>
                         <div className="form-group">
                           <input className="form-control" value= {this.state.password}  onChange={this.handleChangeInput}  name="password" id="phone" type="tel" placeholder="Your Password *" required="required" data-validation-required-message="Please enter your password number."/>
                           <p className="help-block text-danger"></p>
                         </div>

                     
             
                       </div>
                       
                       
                     
                       <div className="clearfix"></div>
                       <div className="col-lg-12 text-center">
                         <div id="success"></div>
                         <button id=" join us " onClick={this.signup} className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
                       </div>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> sign up as organizer </h2>
              <h3 className="wellcom">we will be happy to meet you ♥</h3><br /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">

                  <div className="col-md-6">

                    <div className="form-group">
                      <input className="form-control" value={this.state.name} onChange={this.handleChangeInput} name="name" id="email" type="text" placeholder="Your Company Name *" required="required" data-validation-required-message="Please enter your Company Name ." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.phoneNumber} onChange={this.handleChangeInput} name="phoneNumber" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>

                  </div>
                  <div className="col-md-6">

                    <div className="form-group">
                      <input className="form-control" id="email" type="email" value={this.state.email} onChange={this.handleChangeInput} name="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.password} onChange={this.handleChangeInput} name="password" id="phone" type="Password" placeholder="Your Password *" required="required" data-validation-required-message="Please enter your password number." />
                      <p className="help-block text-danger"></p>
                    </div>

                  </div>

                  <div className="location">

                    <div className="form-group">
                      <input className="form-control" value={this.state.location} onChange={this.handleChangeInput} name="location" id="OrgLocation" type="text" placeholder="Your Locationn  *" required="required" data-validation-required-message="Please enter your Locaton." />
                      <p className="help-block text-danger"></p>
                    </div>

                  </div>

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id=" join us " onClick={this.signup} className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
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


export default Signuporg;
