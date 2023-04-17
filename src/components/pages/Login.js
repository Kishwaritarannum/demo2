import React,{useState,history} from 'react';
import Header from './Header';
import Axios from 'axios';
import Footer from '../Footer';
//import {Router,  Redirect } from 'react-router'


const Login = () => {
//  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  

  const login = () => {
    Axios.post("http://localhost:5001/login", {username: username, password: password,
  }).then((response) => {
    if(response.data.message){
      setLoginStatus(response.data.message)
    }else{
      
   window.location.replace("http://localhost:3000/home")
     
 
    }
  });
  };
  return (
    <div>
        <Header/>
        <h1 className='services' >Login</h1><br/>
   
    <div className='container' >
    
      <h1>Login Here</h1><br/>
      <center>
      <form class="column g-3">
      <div class="col-md-6">
      <input 
      type="text" 
      class="form-control"
      placeholder="Username" 
      onChange={(e) => {
        setUsername(e.target.value);
      }}
      />
      </div><br/>
      <div class="col-md-6">
      <input 
      type="password"
      class="form-control"
      placeholder="Password..."
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      />
      </div>
     <br/><br/>
     <div class="d-grid col-3 mx-auto">
      <input onClick={login} type="button" class="btn btn-primary" value="Login" />
      <a href = "./register" type="button">Create a new Account ? &nbsp;&nbsp; Register</a>
      </div>
    <h1 style={{marginLeft:"10px"}}>{loginStatus}</h1>
    </form>
    </center>
    </div><br/>
    <Footer/>
    </div>
    
  )
}

export default Login;



