import React from 'react';
//import React,  from "react";
import Slider from "react-slick";
//import {faStar } from "react-icons/fa";
import {FaStar } from "react-icons/fa";
import Header from './header';

const Home = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
         background: "black",
         fontColor:'blue',
         display: 'table',
         borderRadius: '50%',
         padding:'4px'
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            background: "black",
            fontColor:'blue',
            display: 'table',
            borderRadius: '50%',
            padding:'4px'
           }}
        onClick={onClick}
      />
    );
  }
  
  return (
    <div>
        <Header/>
        <section>
        <div className="col-md-12" style={{ backgroundColor:'#0648a8'}}>
            <div className="row">
             <div className="col-md-6">
                <div className="p-5 p-1">
                <h1  className="text-white p-1" >Not Getting Job ?</h1>
                <h4 className="text-white">Join Us To Get Interviews With Internship and Training Till You Get The Job  </h4>
                <br/>
                <h5 className="text-white"> With 100% Placement Support</h5>
                </div>
                <div className="p-5">
                    <button type="btn" className="btn btn-css p-3 f-b text-white" style={{border:"1px solid #fff"}}>ENQUIRE NOW</button>
                </div>
            </div> 
            <div className="col-md-6 p-5">
                <div>
                    <img src="./home.png" alt="images" className="img-responsive"
                     style={{width:'100%'}}/>

                </div>
            </div>
            </div>
        </div>
        </section>
       {/* Heading section  ends here*/}
         {/* Heading section  start here*/}
        <section>
            <div className="container py-5">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-3">
                    <a><img src="./trainer.png" alt="" className="acci-css"/>
                    <span className="text-bold f-size"> 100+</span><br/>
                        <span className="f-blue text-bold m-3">Expert Trainers</span>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <div>
                        
                        <a><img src="./hiring.png" alt="" className="acci-css"/>
                        <span className="text-bold f-size">+1500</span><br/>
                        <span className="f-blue text-bold m-3">Hiring patner</span>
                        </a>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                    <a><img src="./graduation.png" alt="" className="acci-css"/>
                        <span className="text-bold f-size">+120</span><br/>
                        <span className="f-blue text-bold m-3">Our Courses</span>
                        </a>
                    </div>
                    <div className="col-md-3">
                    <a><img src="./alumini.png" alt="" className="acci-css"/>
                        <span className="text-bold f-size">5000</span><br/>
                        <span className="f-blue text-bold m-3">Our Alumini</span>
                        </a>
                    </div>
                   

                    </div>

                </div>

            </div>
            

        </section>
        {/* /end of countings */}
        
{/* Appteknow Careers block strats here */}
        <section>
            <div className="container-fluid  p-5">
                <div className="col-md-12 ">
                    <div className="row">
                    
                    <div className="col-md-8">
                        <h1 className="f-blue">Welcome to Appteknow Careers</h1>
                        <p>Our premier Objective-Oriented Training Institute located in BTM Layout, 
                            Bangalore, with a rich legacy spanning over two decades. Our institute 
                            takes pride in training and placing a significant number of students
                             in renowned multinational corporations, highlighting our steadfast
                              dedication to providing top-notch education and ensuring successful placements.
                               Our cutting-edge training methodologies, coupled with valuable Software 
                               Company Internships, have significantly enhanced our students' 
                               learning experiences. We are proud to announce that we have achieved
                                nearly 100% placement success for all our enrolled students. 
                                Join us at Appteknow Careers, where your career aspirations meet
                                 unparalleled opportunities for growth and success.We are the Objective 
                                 Oriented Training Institute established in BTM Layout Bangalore 
                                 from more than 2 decades. Having trained and placed a substantial 
                                 number of students in reputed MNCs, it showcases the institute's
                                  commitment to quality education and effective placements. 
                                  Our innovative training models with Software Company Internships
                                   created a huge impact on our student’s learning curve. 
                                   We are able to place all most all the students who enrolled with us.</p>
                              <br/>
                              <h4 className="f-blue">Why Appteknow  Is The Best Training Institute In Bangalore?</h4><br/>
                              <div>
                                <span ><img src="check.png" alt=""className="f-blue acc25-css"/>
                                Helped more than 50,000+ students and professionals to start &
                                     shift their Career into IT</span><br/>
                                     <span ><img src="check.png" alt="" className="f-blue acc25-css"/>
                                     Helped more than 50,000+ students and professionals to start & 
                                        shift their Career into IT</span><br/>
                                        <span ><img src="check.png" alt="" className="f-blue acc25-css"/>
                                        Helped more than 50,000+ students and professionals to start & 
                                        shift their Career into IT</span>
                              </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="p-3 form-css">
                            
                            <form className="p-3 py-3">
                                <h4 >QuicK Enquiry</h4>
                                        <label htmlFor="username">Name:</label><br/>
                                        <input type="text" id="username" className="input-form" name="username" required /><br/>
                                        <label htmlFor="username" className=" p-1">Email:</label><br/>
                                        <input type="text" id="username" className="input-form" name="username" required /><br/>
                                        {/* <label for="mobiile">India:</label><br/> */}
                                        <select name="mob" id="mobile" className="input-form py-3"><br/>
                                        <option value="Loc"> +91: </option><br/>
                                            <option value="pune">Pune</option>
                                            <option value="bang">Bangalore</option>
                                            <option value="chenn">Chennai</option>
                                            <option value="hydr">Hydrabad</option>
                                            <option value="ker">Kerala</option>
                                        </select><br/>
                                        {/* <select name="mob" id="mobile" className="input-form p-1"><br/> */}
                                        <select name="branch" className="input-form py-3" id="branch"><br/>
                                            <option value="pune">Pune</option>
                                            <option value="bang">Bangalore</option>
                                            <option value="chenn">Chennai</option>
                                            <option value="hydra">Hydrabad</option>
                                            <option value="kerala">Kerala</option>
                                        </select><br/>
                                        {/* <label for="mobiile">Select The Course:</label><br/> */}
                                        <select name="course" id="course" className="input-form py-3"><br/>
                                            <option value="java">java</option>
                                            <option value="dev">web development</option>
                                            <option value="desi">graphic designing</option>
                                            <option value="big">big data</option>
                                            <option value="appti">Apptitudes</option>
                                        </select><br/><br/>
                                       
                                       <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg px-3 " style={{borderRadius:'0px'}}>Submit</button>
                                        </div>
                            </form>
                            
                    </div>

                    </div>

                </div>

            </div>
            </div>
            

        </section>
        {/* Start of Features */}
        <section>
            <div className="container-fluid p-3">
                <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>        

            </div>
            

        </section>
        {/* Start of accreditattion */}
        <section>
            <div className="container-fluid p-3 acc" style={{}}>
             <div className="p-5" > 
                <div className="col-md-12 text-center">
                    <div className="row">
                        
                    <div className="col-md-2">
                        <div>  <img src="./a1.png" alt=""className="acciditation-css"/> </div>
                    </div>
                    <div className="col-md-2"> <div> <img src="./b1.png" alt=""className="acciditation-css"/>   </div>
                    </div>
                    <div className="col-md-2">
                    <div><img src="./c1.png" alt="" className="acciditation-css"/>  </div>
                    </div> 
                     <div className="col-md-2">
                    <div>      <img src="./d1.png" alt="" className="acciditation-css"/> </div>
                    </div>
                    <div className="col-md-2"> <div>   <img src="./e1.png" alt="" className="acciditation-css"/>
                      </div>
                    </div>
                    <div className="col-md-2"> <div>    <img src="./f1.png" alt="" className="acciditation-css"/> </div>
                    </div>
                      
                </div>
                </div>
                </div>  
            </div>
        </section>
        {/* Start of accreditattion */}
        <section>
        <div className="container-fluid p-3">
                <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css p-3">
                        <div>
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-6">
                        <img src="./Appteknow.png" alt="" className="img-css text-left " 
                        style={{width:'100px',height:'100px',backgroundColor:'blue'}}/>
                            </div>
                            <div className="col-md-6">    
                            <h4 className="f-blue"> Madhan</h4>
                            <div  className="text-yellow">
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar/></span>
                            <span className=""><FaStar/></span>
                            </div>
                           
                               
                            </div>
                            </div>
                    </div>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-6">
                        <img src="./Appteknow.png" alt="" className="img-css text-left " 
                        style={{width:'100px',height:'100px',backgroundColor:'blue'}}/>
                            </div>
                            <div className="col-md-6">    
                            <h4 className="f-blue"> Madhan</h4>
                            <div  className="text-yellow">
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar/></span>
                            <span className=""><FaStar/></span>
                            </div>
                           
                               
                            </div>
                            </div>
                    </div>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>

                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-6">
                        <img src="./Appteknow.png" alt="" className="img-css text-left " 
                        style={{width:'100px',height:'100px',backgroundColor:'blue'}}/>
                            </div>
                            <div className="col-md-6">    
                            <h4 className="f-blue"> Madhan</h4>
                            <div  className="text-yellow">
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar checked/></span>
                            <span className=""><FaStar/></span>
                            <span className=""><FaStar/></span>
                            </div>
                           
                               
                            </div>
                            </div>
                    </div>

                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                     

            </div>
        </section>
        <section>
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-white">Student Testimonials</h1>
                    </div>
                    


                    </div>

                </div>
                

            </div>
            

        </section>
        {/* Start of student testimonial */}
        <section>
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                    
                    <div className="col-md-12"></div>

                    </div>

                </div>

            </div>
            

        </section>
        <section>
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    

                    </div>

                </div>

            </div>
            

        </section>

        <section>
        



   
      <div className="container-fluid">
        <h2 className="text-center p-3">Custom Arrows</h2>
        <div className="col-md-12 px-5">
        <div className="row">
        
        <div className="abc">
        <Slider {...settings}>
          <div >
            
            {/* <div className="col-md-1 "></div> */}
            <div className=" box-css text-center p-3"><div>
                <img src="./Appteknow.png" alt="" class="img-css text-center "/>
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                in sharing their Knowledge with Learners.
                 Get Personally Mentored by the Experts.</p></div>
                 </div>
          </div>
          <div>
           
            {/* <div className="col-md-1 "></div> */}
            <div className=" box-css text-center p-3"><div>
                <img src="./Appteknow.png" alt="" class="img-css text-center "/>
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                in sharing their Knowledge with Learners.
                 Get Personally Mentored by the Experts.</p></div>
                 </div>
          </div>
          <div>
            {/* <h3>3</h3> */}
            {/* <div className="col-md-1 "></div> */}
            <div className=" box-css text-center p-3"><div>
                <img src="./Appteknow.png" alt="" class="img-css text-center "/>
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                in sharing their Knowledge with Learners.
                 Get Personally Mentored by the Experts.</p></div>
                 </div>
          </div>
          <div>
            
            {/* <div className="col-md-1 "></div> */}
            <div className=" box-css text-center p-3"><div>
                <img src="./Appteknow.png" alt="" class="img-css text-center "/>
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                in sharing their Knowledge with Learners.
                 Get Personally Mentored by the Experts.</p></div>
                 </div>
          </div>
          <div>
            
            {/* <div className="col-md-1 "></div> */}
            <div className=" box-css text-center p-3"><div>
                <img src="./Appteknow.png" alt="" class="img-css text-center "/>
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                in sharing their Knowledge with Learners.
                 Get Personally Mentored by the Experts.</p></div>
                 </div>
          </div>
          <div>
            
            {/* <div className="col-md-1 "></div> */}
            <div className=" box-css text-center p-3"><div>
                <img src="./Appteknow.png" alt="" class="img-css text-center "/>
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                in sharing their Knowledge with Learners.
                 Get Personally Mentored by the Experts.</p></div>
                 </div>

          </div>
        </Slider>
        </div>
        </div>
        </div>
      </div>


        </section>
      {/* End of Student Testimonial */}
      <section>
         <div className="container p-5">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center p-3">
                    <button type="btn" className="btn btn-css p-3 f-b text-white text-center">FOR MORE TESTIMONIAL</button>
                    </div>
                    <div className="col-md-4"></div>
                        
                    </div>
    
                </div>
        </div>
        </section>
        {/* Ends of FOR MORE TESTIMONIAL */}

        <section>

         <div className="container-fluid p-3" style={{backgroundColor:'#deecef61'}}>
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1>
                    <h2 className=" f-dgray fw-500 text-center">Online</h2>
                    </div>
                    <div className="col-md-3"></div>
                        
                    </div>
    
                </div>





        
        
            <div className="container-fluid p-3">
                <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>        

            </div>
            
            </div>
        </section>
              <section>


            <div className="container-fluid p-3">
                <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>        

            </div>
            

        </section>
              <section>
                <div className='container-fluid p-3' style={{backgroundColor:'#deecef61'}}>

              <div className="col-md-12  p-5">
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                    <h2 className=" f-dgray fw-500 text-center">Chennai</h2>
                    </div>
                    <div className="col-md-3"></div>
                        
                    </div>
    
                </div>

            <div className="container-fluid p-3" >
                <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12 p-3">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                        <div>
                        <img src="./Appteknow.png" alt="" className="img-css text-center "/>
                            <h4>Real Time Expert As Trainer..</h4>
                            <p>At Appteknow Careers, You will Learn from the Experts from industry who are Passionate 
                                in sharing their Knowledge with Learners. Get Personally 
                                Mentored by the Experts.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.
                                 Showcase your Project Experience & Increase your chance of getting Hired!</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 box-css text-center p-3">
                    <div>
                    <img src="./Appteknow.png" alt="" className="img-css"/>
                            <h4>Real Time Expert As Trainer</h4>
                            <p>Get Certified by Appteknow Careers. Also, get Equipped to Clear Global Certifications. 
                                72% Appteknow Careers Students appear for Global Certifications and 100% of them Clear it.</p>
                        </div>
                    </div>
                    </div>
                    </div>        

            </div>
            </div>

        </section>

        <section>
        <div className="container-fluid p-5">
        <div className="p-5 text-center">
                    <button type="btn" className="btn btn-css p-3 f-b text-white ">FOR PLACED STUDENT LIST</button>
                </div>

                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                    <h2 className=" f-dgray fw-500 text-center">Tutorials</h2>
                    </div>
                    <div className="col-md-3"></div>
                        
                    </div>
    
                </div>
                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-outline b-1" type="btn">Python Tutorial</button>
                    </div>
                    <div className="col-md-2"> 
                    <button className="btn btn-outline b-1" type="btn">Java Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Data Science Tutorial</button>
                   
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Ethical Hacking Tutorial</button>
                    
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">AWS Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Full Stack Tutorial</button>
                   
                    </div>
                    </div>
                </div>

                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-outline b-1" type="btn">DevOps Tutorial
                    </button>
                    </div>
                    <div className="col-md-2"> 
                    <button className="btn btn-outline b-1" type="btn">Salesforce Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Selenium Tutorial</button>
                   
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Angular Tutorial</button>
                    
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Software Testing Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Ethical Hacking Tutorial</button>
                   
                    </div>
                    </div>
                </div>

        </div>
        </section>
        {/* End of Tutorials */}

        <section>
        
            <div className="container-fluid">
                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                    <h2 className=" f-dgray fw-500 text-center">Interview Questions</h2>
                    </div>
                    <div className="col-md-3"></div>
                        
                    </div>
    
                </div>
                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-outline b-1" type="btn">Python Tutorial</button>
                    </div>
                    <div className="col-md-2"> 
                    <button className="btn btn-outline b-1" type="btn">Java Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Data Science </button>
                   
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Ethical Hacking </button>
                    
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">AWS Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">FullStack Tutorial</button>
                   
                    </div>
                    </div>
                </div>

                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-outline b-1" type="btn">DevOps Tutorial
                    </button>
                    </div>
                    <div className="col-md-2"> 
                    <button className="btn btn-outline b-1" type="btn">Salesforce Tutorial</button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Selenium Tutorial</button>
                   
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Angular Tutorial</button>
                    
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Software Testing </button>
                    </div>
                    
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Ethical Hacking </button>
                   
                    </div>
                    </div>
                </div>

                </div>
        </section>
        


        
        <section>
        
            <div className="container">
                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                    <h2 className=" f-dgray fw-500 text-center">Appteknow Careers Branches</h2><br/><br/>
                    <h4 className=" f-dgray fw-500 text-center">Chennai</h4>
                    </div>
                    <div className="col-md-3"></div>
                        
                    </div>
    
                </div>
                <div className="col-md-12  p-3">
                    <div className="row">
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Velachery </button>
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Anna Nagar </button>
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">T.Nagar </button>
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Tambaram </button>
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Thoraipakkam </button>
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-outline b-1" type="btn">Porur </button>
                    </div>


                </div>
                </div>
                </div>
                </section>

    <section>
        
        <div className="container">
            <div className="col-md-12  p-3">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                {/* <h2 className=" f-dgray fw-500 text-center">Appteknow Careers Branches</h2> */}
                <h4 className=" f-dgray fw-500 text-center">Bangalore</h4>
                </div>
                <div className="col-md-3"></div>
                    
                </div>

            </div>
            <div className="col-md-12  p-3">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                <button className="btn btn-outline b-1" type="btn">Marathahalli </button>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
            </div>
            </section>

            <section>
        
        <div className="container">
            <div className="col-md-12  p-3">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                {/* <h2 className=" f-dgray fw-500 text-center">Appteknow Careers Branches</h2> */}
                <h4 className=" f-dgray fw-500 text-center">Coimbatore</h4>
                </div>
                <div className="col-md-3"></div>
                    
                </div>

            </div>
            <div className="col-md-12  p-3">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-2">
                <button className="btn btn-outline b-1" type="btn">Saravanampatty</button>
                </div>
                 <div className="col-md-2">
                <button className="btn btn-outline b-1" type="btn">Singanallur </button>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
            </div>
            </section>

            <section>
        
        <div className="container">
            <div className="col-md-12  p-3">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                {/* <h2 className=" f-dgray fw-500 text-center">Appteknow Careers Branches</h2> */}
                <h4 className=" f-dgray fw-500 text-center">Other Locations</h4>
                </div>
                <div className="col-md-3"></div>
                    
                </div>

            </div>
            <div className="col-md-12  p-3">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-2">
                <button className="btn btn-outline b-1" type="btn">Puducherry</button>
                </div>
                 <div className="col-md-2">
                <button className="btn btn-outline b-1" type="btn">Madurai </button>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
            </div>
            </section>
                <section>
            <div className="p-5">
                </div>
        </section>
        {/* End of Tutorials */}
    </div>
  );
}

export default Home;
