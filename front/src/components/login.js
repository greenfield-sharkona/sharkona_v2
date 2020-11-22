import React, { Component } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


const token = ''
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handelOnClick = this.handelOnClick.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)

  }
  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })

    console.log(value)
  }

  handelOnClick = async (e) => {
    console.log(this.state)
    e.preventDefault();
    // console.log("ourCLient", this.state)
    axios.post('/signinClient', this.state)
      .then((response) => {
        if (response.data.orgId) {
          console.log()
          localStorage.setItem('orgId', response.data.orgId)
        } else {
          localStorage.setItem('userId', response.data.userId)
        }
        localStorage.setItem('login', response.data.token)
        window.location.reload()
      })
  }


  render() {
    const { email, password } = this.state
    console.log(this.props.userId)
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Login in </h2>
              <h3 className=" wellcom">We miss you a lot !</h3><br /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form id="contactForm" name="join us" novalidate="novalidate" onSubmit={this.handelSubmit}>
                <div className="row">
                  <div className="col-md-6">

                    <div className="form-group">
                      <input onChange={this.handleChangeInput} name='email' value={email} className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input onChange={this.handleChangeInput} value={password} name='password' className="form-control" id="password" type="password" placeholder="Your Password *" required="required" data-validation-required-message="Please enter your Password." /><br /><br />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>




                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button onClick={this.handelOnClick} id=" join us " class="btn btn-primary btn-xl text-uppercase" type="submit">Join Us</button>
                  </div>



                </div>
              </form>
            </div>
          </div>
        </div>
      </section >

    )
  }
}


export default Login;
