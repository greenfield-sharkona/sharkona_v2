import React , {Component} from "react";
import {NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {
    render(){
        
        return (
          <div>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top"><h3> Sharkona </h3></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars ml-0"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                      <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="#"> Login</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="#"> Sign up</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/event">Events </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/">home</NavLink></li>
         
                  </ul>
              </div>
          </div>
                    </nav>
          </div>
       
        )
    }
  }

export default Nav