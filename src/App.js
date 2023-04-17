import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
