import React from 'react'

const Loginpage =() =>{
    return(
        <>
		
        <div className="container-fluid">
		<div className="row">
			<div className="col-sm-5 col-md-5 py-5"style={{padding:"35px, 15px"}}>
				<div><h1 className="f-blue1 text-center  h_css fw-700  py-3">Welcome Back</h1></div>
				<div>
				<form class="p-5" action="" style={{maxWidth:"500px;margin:auto"}}>
  
				  <div className="input-container p-1">
					<i className="fa fa-user icon"></i>
					<input className="input-field" type="text" placeholder="Username" name="usrnm"/>
				  </div><br/>
				  <div className="input-container p-1">
					<i className="fa fa-key icon"></i>
					<input className="input-field" type="password" placeholder="Password" name="psw"/>
				  </div>
                  <div className="pr-10" style={{display:"flex" }}>
				  <input type="checkbox" className="f-blue1 pull-left p-15" id="" name="password" value=""/>
					<p for="password"  className="f-blue1 pull-left p-1">Forget Password</p>
					{/* <p className="f-blue1 pull-right p-1 ">Remember Password</p> */}
					</div>
				  <button type="submit" className="p-2 btn btn-primary p-1" style={{borderRadius:"23px",fontSize:"16px", fontWeight:"600"}}>Login</button>
				  <p  className="f-blue1 p-20 text-center">Don't have an Account? sign Up </p>
				 
			</form>
			</div>
		</div>
		
		<div className="col-md-7 p-0 " >
		
			<div className="" >
				<img align="middle" src="img2.png" className="img-fluid"  alt="Responsive image" style={{height:"620px",width:"100%"}}/></div>
        </div>
        </div>
		</div>
        </>
    );
}
export default Loginpage;

