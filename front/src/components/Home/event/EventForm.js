import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      startDate: '',
      startTime: '',
      location: '',
      phoneNumber: '',
      endDate: '',
      endTime: '',
      orgId: this.props.orgId
    }
    this.handelOnClick = this.handelOnClick.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)

  }
  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }
  handelOnClick = async (e) => {
    e.preventDefault();
    console.log(this.state)
    // console.log("ourCLient", this.state)
    axios.post('/addEvent', this.state)
      .then((response) => {
        console.log(response)
        this.setState({
          name: '',
          startDate: '',
          startTime: '',
          location: '',
          phoneNumber: '',
          endDate: '',
          endTime: '',
        })
      })
  }
  render() {

    return (

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Share your event  </h2>
              <h3 className="section-subheading text-muted">we will be happy to meet you ♥</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" value={this.state.name} onChange={this.handleChangeInput} id="tilie" name="name" type="text" placeholder="Event title *" required="required" data-validation-required-message="Please enter Your Event Title ." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.startDate} onChange={this.handleChangeInput} id="sDate" name="startDate" type="date" placeholder="start Date *" required="required" data-validation-required-message="Please enter event start Date." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.startTime} onChange={this.handleChangeInput} id="sTime" name="startTime" type="time" placeholder="startTime *" required="required" data-validation-required-message="Please enter event start Time." />
                      <p className="help-block text-danger"></p>
                    </div>



                    <div className="form-group">
                      <input className="form-control" value={this.state.location} onChange={this.handleChangeInput} id="location" name="location" type="text" placeholder="Event Location  *" required="required" data-validation-required-message="Please enter your event Locaton." />
                      <p className="help-block text-danger"></p>
                    </div>


                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="phone" value={this.state.phoneNumber} onChange={this.handleChangeInput} name="phoneNumber" type="phone" placeholder="phone number *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.endDate} onChange={this.handleChangeInput} id="date" name="endDate" type="date" placeholder=" end Date *" required="required" data-validation-required-message="Please enter event end Date." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.endTime} onChange={this.handleChangeInput} id="etime" name="endTime" type="time" placeholder="end Date *" required="required" data-validation-required-message="Please enter event end date." />
                      <p className="help-block text-danger"></p>
                    </div>

                    {/* <div className="form-group">
                         <input className="form-control" onChange={this.handleChangeInput} id="logo"  type="file" placeholder=" insert your company logo*" required="required" data-validation-required-message="Please insert your company logo."/>
                         <p className="help-block text-danger"></p>
                       </div> */}


                  </div>



                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id=" Add Form " onClick={this.handelOnClick} className="btn btn-primary btn-xl text-uppercase" type="submit">Add Event</button>
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


export default EventForm;
