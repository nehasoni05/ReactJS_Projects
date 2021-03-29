import React, { Component } from "react";
 
class SignUp extends Component {

    handleClick  = ()=>
    {
            alert("Thank you for signing in 😀.");
    }
    
    render() {
    return (
        <>
        <div className="home">
            <h2>SignUp</h2>
            <b>Username</b><br/>
            <input type="text" placeholder="Enter username"/>
            <br/><br/>

            <b>Enter Email</b><br/>
            <input type="email" placeholder="Enter your Email"/>
            <br/><br/>
            <b>Password</b><br/>
            <input type="password" placeholder="Enter password"/>
            <br/><br/>
            <button className="btn btn-success" 
            onClick={this.handleClick}>
            SignUp
            </button>
            </div>
        </>
        );
  }
}
 
export default SignUp;
