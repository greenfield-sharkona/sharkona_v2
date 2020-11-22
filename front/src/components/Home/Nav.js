import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


class Nav extends Component {
    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand " href="/"><h3> Sharkona </h3></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                  <i className="fas fa-bars ml-0"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/login"> Login</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/signup"> User Sign up</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/signuporg"> Organizer Sign up </NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/event">Events </NavLink></li>

                                <li className="nav-item" onClick={() => {
                                    localStorage.removeItem('userId')
                                    localStorage.removeItem('orgId')
                                    localStorage.removeItem('login')
                                }}><NavLink className="nav-link js-scroll-trigger" to="/">LogOut</NavLink></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Nav