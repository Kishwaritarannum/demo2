import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';






function Cards() {
  return (
      <>
   
    
    <div className='cards'>
      <h1>Welcome to our Website!! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
         
          <ul className='cards__items'>
            <CardItem
              src='images/book1.jpg'
              text='Classics are celebrated and treasured stories that represent the period in time in which they were written.'
              label='Classic Books'
              // path='/services'
            />
            <CardItem
              src='images/book2.jpg'
              text='Sometimes, the things we think we fear are not real – they are things we’ve learned to fear.'
              label='Adventure Books'
              // path='/products'
            />
            <CardItem
              src='images/book4.png'
              text='Your child will be preparing, even when they don’t know it, for reading on their own someday.'
              label='Books for Kids'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    
</>
    
  );
}

export default Cards;
