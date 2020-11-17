import React , {Component} from "react";
import {NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  render(){
        
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
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
               <p className="help-block text-danger"></p>
                     </div>
                     <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                       <p className="help-block text-danger"></p>
                     </div>
                     <div className="form-group">
                       <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                       <p className="help-block text-danger"></p>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <input className="form-control" id="name" type="text" placeholder="Your Locationn  *" required="required" data-validation-required-message="Please enter your Locaton."/>
               <p className="help-block text-danger"></p>
                     </div>
                     {/* <div className="form-group">
                      <img className = "imgarea" id= "img" src ""
                       <p className="help-block text-danger"></p>
                     </div> */}
        
                   </div>
                   
                   
                 
                   <div className="clearfix"></div>
                   <div className="col-lg-12 text-center">
                     <div id="success"></div>
                     <button id=" join us " className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
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
