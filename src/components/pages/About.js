import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';
import Navbar from '../Navbar';

 function About() {
  return (
  <>
  <Navbar/>
  <h1 className='books'>ABOUT US</h1>
  <div className='cards'>
      <h1>About US</h1>
  </div>
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-4">
    <div class="card" style={{ border:'white'}}>
      <div class="card-body">
      <img src="/images/book1.jpg" class="card-img-top" alt="..."/>
        {/* <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{ border:'white'}}>
      <div class="card-body">
        <h5 class="card-title">Special Offer On Books</h5>
        <p class="card-text">Started with an Aim of “Empowering SMEs & Assisting Auditors”, We are a GOI 
Recognised Bootstrapped Start-up based out of Guntur providing Virtual RealTime Accounting Services to 100s of Clients from 25+ Types of Industries (In 3 
States & 65+ Districts) with our 100+ Accounting, Technology & Management 
related Experts, fulfilling Business Owners- Accounting + compliances + MIS 
Requirements.
</p>
<p>Started with an Aim of “Empowering SMEs & Assisting Auditors”, We are a GOI 
Recognised Bootstrapped Start-up based out of Guntur providing Virtual RealTime Accounting Services to 100s of Clients from 25+ Types of Industries (In 3 
States & 65+ Districts) with our 100+ Accounting, Technology & Management 
related Experts, fulfilling Business Owners- Accounting + compliances + MIS 
Requirements.</p>
<p>Started with an Aim of “Empowering SMEs & Assisting Auditors”, We are a GOI 
Recognised Bootstrapped Start-up based out of Guntur providing Virtual RealTime.</p>
        <a href="#" class="btn btn-primary">Contact US</a>
      </div>
    </div>
  </div>
</div><br/>
  <Footer/>
  </>
)
};
export default About;
