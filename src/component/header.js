import React from 'react';
import '../stylesheet.css';
// import {NavLink} from 'react-router-dom';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaYoutubeSquare } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div >
        
            <div className="col-md-12 px-5 m-0" style={{backgroundColor: '#000'}}> 
            <div className="">
                <div className="row">
                 
                    <div className="col-md-6 p-1 ">
                        <h6 className="text-white text-center p-1 m-0">Appteknow Careers is a Brand Name of EDGTal Academy LLP.</h6>
                    </div>
                    <div className="col-md-4 p-1">
                    <h6 className="text-white  text-end m-0"> 
                    <a href="https://www.facebook.com/appteknowcareers" className="px-3 text-white f-19"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/appteknowcareers/"  className="px-3 text-white f-19"><FaInstagramSquare /></a>
                    <a href="https://www.linkedin.com/company/appteknowcareers"   className="px-3 text-white f-19"><FaLinkedinIn /></a>
                    <a href="https://www.youtube.com/@aptechcourses9503"  className="px-3 text-white f-19"><FaYoutubeSquare /></a></h6>
                    
                    </div>
                    <div className="col-md-2 p-1 m-0">
                        <h6 className="text-end text-white m-0  p-1">
                          <a href="#login.js" class="text-white"style={{textDecoration:"none"}}> Login&nbsp;&nbsp;</a>
                           <a href="#signup.js"class="text-white "style={{textDecoration:"none"}}>&nbsp;SignUp</a>
                          </h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
  <div className="container-fluid" style={{height:"50px"}}>
    <a className="navbar-brand" href="home.js"><img src="appteknow.png" className="logo-css" alt="img" style={{boxShadow:"1px 1px3px 4px #fff",height:'100px',width:'100px'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle t"style={{textDecoration:"none",color:"blue",fontWeight:'500'}}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            COURSES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item p-0" href="#"><a href="#">IT Courses</a>
            </a>
            <ul class="dropdown-menu dropdown-submenu " style={{top:"5px"}} >
              <li>  <a href="/fullstack-java" class="dropdown-item">Full Stack Java</a> </li>
              <li>  <a href="/fullstack-java" class="dropdown-item">Full Stack Phython </a> </li>
              <li>   <a href="/fullstack-java" class="dropdown-item">Full Stack Web Development</a> </li>
              <li>  <a class="dropdown-item" href="software-testing.js">Software Testing</a> </li>
              </ul>
              
              </li>
               <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item " href="#">Non-IT Courses</a>
            <ul class="dropdown-menu dropdown-submenu">
              <li>  <a class="dropdown-item" href="#">Digital Marketing</a> </li>
              <li>  <a class="dropdown-item" href="#">Tally + GST</a> </li>
              <li>  <a class="dropdown-item" href="#">Advance Ms-Office Suite</a> </li>
              </ul>
            
            </li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Complemenatry</a>
            <ul class="dropdown-menu dropdown-submenu">
              <li>  <a class="dropdown-item" href="#">Softskills and Apptitude</a> </li>
              <li>  <a class="dropdown-item" href="#">English Communication</a> </li>
              <li>  <a class="dropdown-item" href="#">Interview Prapration</a> </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  text-blue" style={{textDecoration:"none",color:"blue",fontWeight:'500'}} href="#" id="navbarDropdown" role="button"  aria-expanded="false">
           INTERNSHIIPS
          </a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue" style={{textDecoration:"none",color:"blue",fontWeight:'500'}}  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           COMPANIES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Hire  For Us </a></li>
             <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Corporate Training</a></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue"style={{textDecoration:"none",color:"blue",fontWeight:'500'}}  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           COLLEGES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Technical Training</a></li>
             <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Skills Trainings</a></li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">OnCampus Drive</a></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue" style={{textDecoration:"none",color:"blue",fontWeight:'500'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          BRANCHES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">BTM Layout </a></li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Mysore</a></li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Nelamangala</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue" style={{textDecoration:"none",color:"blue",fontWeight:'500'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           PLACEMENTS
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>

            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
  </div>
    </>
  );
}

export default Header;
