import React,{useState,useEffect,setState,useParams} from 'react';
import Axios from 'axios';
import '../../App.css';
import Footer from '../Footer';
import Header from './Header';
import bcrypt from 'bcryptjs';


function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const hashedPassword = bcrypt.hashSync(password);

  // console.log(hashedPassword)
 
  const register = () => {
   Axios.post("http://localhost:5001/register", {username: username, email: email, password: password,
  })
  .then((response) => {
   console.log((response)=>{
   })
   
  })
  .catch((err)=>(err.response.data));
  setIsSuccess(true);
  
  
  };



 

  return (
    <>
    <Header />
    <h1 className='services' >Register</h1><br/>
   
    <div className='container' >
    
      <h1>Register Here</h1><br/>
      <center>
      {isSuccess ? (
        <p>Message sent successfully!</p>
      ) : (
      <form class="column g-3">
      <div class="col-md-6">
    <input type="text" 
    class="form-control" 
    placeholder="Enter Your Full Name"
    onChange={(e) => {
        setUsername(e.target.value);
    }}
      required/>
  </div><br/>

    {/* <input type="text"
    placeholder = "Enter Your Name" 
    onChange={(e) => {
      setUsername(e.target.value);
    }}
    
    /> */}
    <div class="col-md-6">
    <input type="text" 
    class="form-control" 
    placeholder="Enter Email"
    onChange={(e) => {
        setEmail(e.target.value);
    }}
      required/>
      </div><br/>
    {/* <input type="text"
    placeholder = "Enter Email" 
    onChange={(e) => {
      setEmail(e.target.value);
    }}/> */}
   <div class="col-md-6">
    <input type="password" 
    class="form-control" 
    placeholder="Enter Password"
    onChange={(e) => {
        setPassword(e.target.value);
    }}
      required/>
      </div>
    {/* <input type="password"
    placeholder = "Enter Password" 
     onChange={(e) => {
      setPassword(e.target.value);
    }}
    /> */}
    <br/><br/>
    <div class="d-grid col-3 mx-auto">
    <input onClick={register} class="btn btn-primary" type="button" value="Register"/>
    <a href = "/login" type="button">Already have an account ? &nbsp;&nbsp; Login</a>
    </div><br/>
    </form>
      )}
    </center>
    </div>
    
   <Footer/>
    </>
  );
}


export default Register;

