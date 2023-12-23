

// function import 'react-native'
import React from 'react'
import { Link } from 'react-router-dom';
//import renderer from 'react-test-renderer'
//import signup from '../signup';


function Signup() {
 



  return (
    <div>
        <>
    <div className="container-fluid">
		<div className="row"> 
			<div className="col-sm-5 col-md-5  "style={{padding:"10px 25px;"}}>
				<div><h1 className="f-blue1 text-center p-15 h_css fw-700 m-0">Sign Up</h1></div>
				<div>
				<form action="" style={{maxWidth:"500px", margin:"auto"}}>
  
				  <div className="input-container p-1">
					<i className="fa fa-user icon"></i>
					<input className="input-field input_css" type="text" placeholder="Username" name="usrnm"/>
				  </div>
				  <div className="input-container p-1">
					 <i className="fa fa-user icon"></i> 
					<input className="input-field input_css" type="text" placeholder="Email Address" name="usrnm"/>
				  </div>
				  
				  <div className="input-container p-1">
					 <i className="fa fa-key icon"></i>
					<input className="input-field input_css" type="password" placeholder="Password" name="psw"/>
				  </div>
				  
				   <div className="input-container1 p-1  mb-10" > 
					<input className="input-field input_css degree_css degree_right" type="password" placeholder="PG Degree " name="psw"/>
					<input className="input-field input_css degree_css degree_right pull-right fr" type="password" placeholder="PG Degree %" name="psw"/>
				  </div>
				  <div className="input-container1 p-1  mb-10" > 
					<input className="input-field input_css degree_css degree_right" type="password" placeholder="Graduation Degree " name="psw"/>
					<input className="input-field input_css degree_css degree_right pull-right fr" type="password" placeholder="Graduation Degree %" name="psw"/>
				  </div>
				  <div className="input-container1 p-1  mb-10" > 
					<input className="input-field input_css degree_css degree_right" type="password" placeholder="PUC/Diploma % " name="psw"/>
					<input className="input-field input_css degree_css degree_right pull-right fr" type="password" placeholder="10th %" name="psw"/>
				  </div>
				  <button type="submit" className="btn btn-primary p-2 signup_css " style={{}}>Sign Up</button>
				  <Link to="/login"></Link><p className="f-blue1 p-1 text-center">Already have an Account ? Sign In</p>
				 
			</form>
			</div>
		</div> 
		<div className="col-md-7" >	
		<img align="middle" src="./Images/img3.png" className="img-fluid"  alt="Responsive image"
				style={{height:"620px",width:"100%"}}/>
		</div>



</div>
</div>
</>
      
    </div>
  )
}

export default Signup;
