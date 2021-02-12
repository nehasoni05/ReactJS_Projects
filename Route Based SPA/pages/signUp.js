import React from 'react';
import "./style.css";
import {
  Link
} from "react-router-dom";

class SignUp extends React.Component 
{
    handleClick  = ()=>
    {
            alert("Thank you for signing up 😀");
    }
    render()
    {
        return (
            <div className="jumbotron home home1">
            <h2>SignUP</h2>
            <form>
            <b>Username</b><br/>
            <input type="text" placeholder="Enter username" required/><br/><br/>
            <b>Enter Email</b><br/>
            <input type="email" name="email" placeholder="Enter your Email" required/><br/><br/>
            <b>Password</b><br/>
            <input type="password" placeholder="Enter password" required/><br/><br/>
            <Link to="/">
            <button className="btn btn-success" 
            onClick={this.handleClick}
            >
            SignUP
            </button>
            </Link>
            </form>
            <Link to="./signIn"><button className="btn btn-success btn1">SignIn</button></Link>
            </div>
        )
    }
}


export default SignUp;
