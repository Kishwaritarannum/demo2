import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Products = () => {
    const [filter, setFilter] = useState('');
    const [noOfElements, setnoOfElements] = useState(4);
    
    const slice = data.cardData.slice(0, noOfElements);
    
        
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {

     return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    return(
        <div>
        {/* <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="book.png" alt="Bootstrap" width="200" height="50"/>
    </a>
  </div>
</nav> */}

{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="book.png" alt="Bootstrap" width="200" height="50"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><strong>Home</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>About</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Blogs</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Services</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Contact</strong></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   */}
   <Navbar/>
        <section className="py-4 container">
        <div className="row justify-content-center">

        <div className="col-12 mb-5">
          <div className="mb-3 col-2">
            {/* <label className="form-lable h4">Search</label> */}
            <input
             placeholder='Search by Name'
              type="text"
              className="from-control form-control-lg"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>

         {dataSearch.map((item,index)=>{
            return(
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                <div className="card p-0 overflow-hidden h-100 shadow">
                   <img src={item.img} alt="" className="card-img-top"/>
                   <div className="card-body" >
                       <h5 className = "card-title">{item.title}</h5>
                       <p className="card-text">{item.desc}</p>
                   </div>
                </div>
                </div>

            )
         })}
         
        </div>
        </section>
        
        {/* <nav aria-label="...">
                <ul class="pagination">
                <li class="page-item disabled">
                 <a class="page-link">Previous</a>
              </li>
            <li class="page-item"><a class="page-link" href="./Search">1</a></li>
            <li class="page-item active" aria-current="page">
             <a class="page-link" href="./Search2">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="./Search3">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
             </li>
             </ul>
         </nav> */}
         <Footer/>
         </div>
         
    );

}

export default Products;