import React,{useState} from 'react';
import '../../App.css';
import Footer from '../Footer';
import axios from 'axios';
import Header from './Header';




const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

   
    try {
      // send the email using axios
      const response = await axios.post("http://localhost:5001/api/send-email", {
        name,
        email,
        number,
        message,
      });

      console.log(response.data); // log the response from the server
      setIsSuccess(true); // set the success status to true
    } catch (error) {
      console.error(error);
    }
  };
  // const [formState, setFormState] = useState({});

  // const config = {
  //   username: 'alt.y9-98w8v2o@yopmail.com',
  //   password: 'D391CE256866B007B1BE00E46B7B84BBFE4C',
  //   Host:'server-smtp.elasticemail.com',
  //   Port:2525,
  //   SecureToken:'7d180e5f-3e08-45b7-8b7a-b62eb36c06b2',
  //   To : 'kishwarijit@gmail.com',
  //   From : "kishwari@edgeforce.in",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // };
  // const changeHandler = (event) =>{
  //   setFormState({...formState, [event.target.name]: event.target.value});
  // };

  // const submitHandler = (event)=>{
  //   event.preventDefault();
  //   const config = {
  //     username: 'kishwarijit@gmail.com',
  //     password: 'pjmczqmkxowwzdfo',
  //     Host:'server-smtp.elasticemail.com',
  //     Port:2525,
  //     // SecureToken:'7d180e5f-3e08-45b7-8b7a-b62eb36c06b2',
  //     To : 'kishwarijit@gmail.com',
  //     From : formState.email,
  //     Subject : "This is the subject",
  //     Body : `${formState.name} connected to you over email`,
  //   };
  //   if(window.Email){
  //     window.Email.send(config).then(() => alert("email sent successfully"));
  //   }
  // }
  return (
    <>
    <Header/>
    <h1 className='services' >Contact US</h1><br/>
   
    <div className='container' >
    
      <h1>Create Contact</h1><br/>

  <center>
  {isSuccess ? (
        <p>Message sent successfully!</p>
      ) : (
  <form class="column g-3" onSubmit={handleSubmit}>
  <div class="col-md-6">
    {/* <label for="inputAddress" class="form-label">Full Name</label> */}
    <input type="text" class="form-control" name='name' 
    value={name}  onChange={(event) => setName(event.target.value)}  placeholder="Enter Your Full Name" required/>
  </div><br/>
  <div class="col-md-6">
    {/* <label for="inputEmail4" class="form-label">Email</label> */}
    <input type="text" class="form-control"  name='email'
     value={email}  onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" required/>
  </div><br/>
  {/* <div class="col-md-6"> */}
    {/* <label for="inputPassword4" class="form-label">Password</label> */}
    {/* <input type="password" class="form-control"  name='password' value={formState.password || ''} onChange={changeHandler} placeholder="Enter Password"/>
  </div><br/> */}
  <div class="col-md-6">
    {/* <label for="inputAddress" class="form-label">Mobile Number</label> */}
    <input type="text" class="form-control"  name='number'
     value={number}  onChange={(event) => setNumber(event.target.value)} placeholder="Mobile Number" required/>
  </div><br/>
  {/* <div class="col-md-6"> */}
    {/* <label for="inputAddress2" class="form-label">Address</label> */}
    {/* <input type="text" class="form-control" id="inputAddress2" name='address' value={formState.address || ''} onChange={changeHandler} placeholder="Your Address"/>
  </div><br/> */}
  <div class="col-md-6">
    {/* <label for="inputCity" class="form-label">Message</label> */}
    <input type="long-text" class="form-control"  name='message' value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message" style={{height:100}} required/>
  </div><br/>
  {/* <div class="col-md-2">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  {/* <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-6">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <center>
  <div class="d-grid gap-1 col-3 mx-auto">
  <button class="btn btn-primary" type="submit">Submit</button>
  {/* <button class="btn btn-primary" type="button">Button</button> */}
</div>
  </center>
</form>
      )}
<br/>
</center>

    </div><br/>
    <Footer/>
    </>
  )
};

export default Contact;
