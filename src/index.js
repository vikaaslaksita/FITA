import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header';
import Home from './component/home';
import Footer from './component/footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './component/signup';
import Loginpage from './component/login';
import FullstackJava from './it-couses/fullstackjava';
import Fullstackphython from './it-couses/fullstackphython';
import Webdevelopment from './it-couses/webdevelopment';
import Softwaretesting from './it-couses/softwaretesting';
import EnglishCommunication from './complemenatry/EnglishCommunication';
import InterviewPrepation from './complemenatry/InterviewPrepation';
import SoftSkillApptitute from './complemenatry/SoftSkillApptitute';
import AdvanceMsOffice from './non-it courses/AdvanceMsOffice';
import TallyGst from './non-it courses/TallyGst';
import DigitalMarketing from './non-it courses/DigitalMarketing';
import CorporateTraining from './companies/CorporateTraining';
import HireForUs from './companies/HireForUs';
import Mysore from './branches/Mysore';
import Nelamangala from './branches/Nelamangala';
import BtmLayout from './branches/BtmLayout';
import OnCampusDrive from './colleges/OnCampusDrive';
import SkillsTraining from './colleges/SkillsTraining';
import TechnicalTraining from './colleges/TechnicalTraining';
import Internship from './Internship';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="header" element={<Header/>} />
          <Route index element={<Home />} />
          <Route path="footer" element={<Footer />} />
          <Route path='signup' element={<Signup/>}/>
         <Route path='login' element={<Loginpage/>}/>
          <Route path='fullstackjava' element={<FullstackJava/>}/>
         <Route path='Fullstackphython' element={<Fullstackphython/>}/>
         <Route path='Webdevelopment' element={<Webdevelopment/>}/>
         <Route path='Softwaretesting' element={<Softwaretesting/>}/> 
         <Route path='EnglishCommunication' element={<EnglishCommunication/>}/> 
         <Route path='InterviewPrepation' element={<InterviewPrepation/>}/>
         <Route path='SoftSkillApptitute' element={<SoftSkillApptitute/>}/>
         <Route path='AdvanceMsOffice' element={<AdvanceMsOffice/>}/> 
         <Route path='DigitalMarketing' element={<DigitalMarketing/>}/> 
         <Route path='TallyGst' element={<TallyGst/>}/>
         <Route path='CorporateTraining' element={<CorporateTraining/>}/> 
         <Route path='HireForUs' element={<HireForUs/>}/>
         <Route path='Mysore' element={<Mysore/>}/>
         <Route path='Nelamangala' element={< Nelamangala/>}/> 
         <Route path='BtmLayout' element={<BtmLayout/>}/>
         <Route path='OnCampusDrive' element={<OnCampusDrive/>}/>
         <Route path='SkillsTraining' element={<SkillsTraining/>}/> 
         <Route path='TechnicalTraining' element={<TechnicalTraining/>}/>
         <Route path='Internship' element={<Internship/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
