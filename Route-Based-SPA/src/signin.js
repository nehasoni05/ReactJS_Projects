import React, { Component } from "react";

 
class SignIn extends Component {
    handleClick  = ()=>
    {
            alert("Thank you for signing in 😀.");
    }
    
    render() {
    return (
        <>
        <div className="home">
            <h2>SignIN</h2>
            <b>Username</b><br/>
            <input type="text" placeholder="Enter username"/>
            <br/><br/>

            <b>Password</b><br/>
            <input type="password" placeholder="Enter password"/>
            <br/><br/>

            <button
            className="btn btn-success" 
            onClick={this.handleClick}>
            SignIN
            </button>
            </div>
        </>
        );
  }
}
 
export default SignIn;
