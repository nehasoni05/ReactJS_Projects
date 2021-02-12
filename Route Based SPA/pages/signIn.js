import React from 'react';
import "./style.css";
import {
  Link
} from "react-router-dom";

class SignIn extends React.Component 
{
    handleClick  = ()=>
    {
            alert("Thank you for signing in 😀.");
    }
    render()
    {
        return (
            <div className="jumbotron home">
            <h2>SignIN</h2>
            <b>Username</b><br/>
            <input type="text" placeholder="Enter username" required/><br/><br/>
            <b>Password</b><br/>
            <input type="password" placeholder="Enter password" required/><br/><br/>
           <Link to="/">
            <button className="btn btn-success" 
            onClick={this.handleClick}>
            SignIN
            </button>
            </Link>
            <Link to="./signUp"><button className="btn btn-success btn2">SignUp</button></Link>
            </div>
        )
    }
}


export default SignIn;
