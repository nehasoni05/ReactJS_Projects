import React from 'react';
import {BrowserRouter, Route,Link } from "react-router-dom";
import Home from './home.js';
import SignIn from './signin.js';
import SignUp from './signup.js';
import "./style.css";

class App extends React.Component {  
render() {  
 return ( 
     <BrowserRouter> 
  <div>  
   <h1>Simple SPA</h1>  
        <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
          </div>
    </div>
    </BrowserRouter>
    )  
 }  
}  
export default App;
