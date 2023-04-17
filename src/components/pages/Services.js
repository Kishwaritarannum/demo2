import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer';
import CardItem from '../CardItem';
import Navbar from '../Navbar';

 function Services() {
  return (
  <>
  <Navbar/>
  <h1 className='services'>SERVICES</h1>
  <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/book1.jpg'
              text='Read Free Library Books Online'
              // label='Kids'
              
            />
            <CardItem
              src='images/book2.jpg'
              text='Keep Track of your Favourite Books'
              // label='Text Books'
              
            />
            <CardItem
              src='images/book3.jpg'
              text='Try the Virtual Library Explorer'
              // label='Classic Books'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/book4.png'
              text='Try Full Text Search'
              // label='Romance'
            
            />
            <CardItem
              src='images/book6.png'
              text='Be an Open Librarian'
              // label='Books we love'
            
            />
            <CardItem
              src='images/book5.jpg'
              text='Send us Feedback'
              // label='Recently Returned'
            
            />
          </ul>
        </div>
      </div>
    </div>
    
  <Footer/>
  </>
  );
};
export default Services;
