import React , {Component} from "react";
// import {Link,NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Event from "./Event";
class Header extends Component {
    render(){
        
        return (
          <div>
              <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                      <div className="intro-lead-in"> Welcome To the land of festivel !</div>
                      <div className="intro-heading text-uppercase">let's start the Journy ♥</div>
                      {/* <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" id = "btn" href="/components/Events">Show me the Events</a> */}
                      {/* <Button variant="btn btn-success" onClick={() => Event.push('/Event')}>Click button to view products</Button> */}
                    </div>
                </div>
            </header>
       </div>
        )
    }
  }

export default Header