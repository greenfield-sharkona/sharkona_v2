import React, { Component } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const token =''
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handelOnClick=this.handelOnClick.bind(this)
    this.handleChangeInput=this.handleChangeInput.bind(this)

  }

  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  //take the data from state to back by endpoint ('/signinClient')
  handelOnClick = async (e) => {
    e.preventDefault();
    // console.log("ourCLient", this.state)
    axios.post('/signinClient' , this.state)
      .then((response)=>{
        console.log(response)
      })
    }
    

  render() {

    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Login in </h2>
              <h3 className="section-subheading text-muted">We miss you a lot !</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form id="contactForm" name="join us" novalidate="novalidate" onSubmit={this.handelSubmit}>
                <div className="row">
                  <div className="col-md-6">

                    <div className="form-group">
                      <input  onChange={this.handleChangeInput} name='email' className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input onChange={this.handleChangeInput}  name='password' className="form-control" id="password" type="password" placeholder="Your Password *" required="required" data-validation-required-message="Please enter your Password." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>




                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button onClick={this.handelOnClick} id=" join us " className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
                    {/* <button onClick={this.handelOnclick} id=" know client " className="btn btn-primary btn-xl text-uppercase" type="submit">know client</button> */}
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


export default Login;
