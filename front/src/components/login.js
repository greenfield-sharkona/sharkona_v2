import React , {Component} from "react";
import {NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  render(){
        
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
              <form id="contactForm" name="join us" novalidate="novalidate">
                 <div className="row">
                   <div className="col-md-6">
                 
                     <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                       <p className="help-block text-danger"></p>
                     </div>
                     
                   </div>
                   <div className="col-md-6"> 
                   <div className="form-group">
                       <input className="form-control" id="password" type="password" placeholder="Your Password *" required="required" data-validation-required-message="Please enter your Password."/>
                       <p className="help-block text-danger"></p>
                     </div>
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


export default Login;
