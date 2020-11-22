import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

import Card from './eventCard'
import CardOrg from './eventCardOrg'


class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
      ,
      orgEvents: []
      ,
      userEvents: []
    }
  }

  componentDidMount = () => {
    // this.getOrgEvents({ orgId: this.props.orgId })

    if (this.props.orgId) {
      this.getOrgEvents({ orgId: this.props.orgId })

      console.log("here orgid")
    }

    else if (this.props.userId) {
      this.getOrgEvents({ userId: this.props.userId })
      this.getEvents()

    }

    else {
      this.getEvents()
    }

  }
  // org events
  getOrgEvents = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('/orgEvents', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ orgEvents: data }));

  }
  //user events 
  getUserEvents = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('/clientEvents', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ userEvents: data }));
  }


  //all events
  getEvents = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/retrieveEvent', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data })
        // console.log(this.state.events)
      })
  }

  handelOnClick = async (id, userId) => {
    // e.preventDefault();
    // console.log("ourCLient", this.state)
    axios.post('/bookEvent', { _id: id, userId: userId })
      .then((response) => {
        console.log(response)

      })
  }

  render() {
    // const events = [{
    //   title: "Jawwal Event",
    //   sDate: "10/11/2020",
    //   sTime: "06:00 pm",
    //   eDate: "16/11/2020",
    //   eTime: "10:30 pm",
    //   location: "Ramallah",
    //   phoneNumber: "0599587398"
    // }]

    const { events, orgEvents, userEvents } = this.state
    var specEvents, allEvents;
    console.log(events, "213ws")

    if (this.props.orgId) {
      console.log("here org")
      specEvents = orgEvents.map(({ name, startDate, startTime, endDate, endTime, location, phoneNumber }, index) =>
        <CardOrg title={name} sDate={startDate} sTime={startTime} eDate={endDate} eTime={endTime} location={location} phoneNumber={phoneNumber} key={index} />
      )
    } else if (this.props.userId) {
      console.log("here user")

      specEvents = userEvents.map(({ name, startDate, startTime, endDate, endTime, location, phoneNumber }, index) =>
        <Card title={name} sDate={startDate} sTime={startTime} eDate={endDate} eTime={endTime} location={location} phoneNumber={phoneNumber} key={index} />
      )

      allEvents = events.map(({ name, startDate, startTime, endDate, endTime, location, phoneNumber }, index) =>
        <Card title={name} sDate={startDate} sTime={startTime} eDate={endDate} eTime={endTime} location={location} phoneNumber={phoneNumber} key={index} />
      )


    }
    else {

      specEvents = events.map(({ _id, name, startDate, startTime, endDate, endTime, location, phoneNumber }, index) =>
        <Card _id={_id} userId={this.props.userId} handelOnClick={this.handelOnClick} title={name} sDate={startDate} sTime={startTime} eDate={endDate} eTime={endTime} location={location} phoneNumber={phoneNumber} key={index} />
      )
    }

    // console.log(specEvents, "Asdsds")

    return (
      <div className="eventPage page-section " >
        <div className="container ">
          <div className="row" >
            <div className="col-lg-12 text-center">
              <h2 className="forEvent">  OUR EVENTS ♥ </h2>
              <h3 className="wellcom"> THe  PlAce WheRe yOu wiLL EnjOy !</h3><br /><br />
            </div>
          </div>
          <div className="row" id="eventsCard">
            {
              // events.map(({ name, startDate, startTime, endDate, endTime, location, phoneNumber }, index) =>
              //   <Card title={name} sDate={startDate} sTime={startTime} eDate={endDate} eTime={endTime} location={location} phoneNumber={phoneNumber} key={index} />
              // )
              specEvents
            }

          </div>

          <div className="row" id="eventsCard">
            {
              allEvents
            }

          </div>
        </div>
      </div>
    );
  }
}
export default Event;
