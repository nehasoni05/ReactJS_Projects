import React from "react";
import "./style.css"
import {
  Link
} from "react-router-dom";

class Home extends React.Component 
{
    render()
    {
        return (
            <div className="home jumbotron"> 
            <h2 className="heading">Welcome,We are CodeQuotient </h2> 
            <p>CodeQuotient was a dream which was envisioned 4 years back to make programming education easy and accessible for Indian students. We designed a program which is 
            market oriented, fun to learn and focus on setting a strong base for a programming career. Our students are an asset for any team from day one, and trained to be 
            Supercoders.</p>
        <Link to="./signIn">
            <button className="btn btn-success">SignIn</button> 
            </Link> &nbsp; &nbsp;
            <Link to="./signUp">
            <button className="btn btn-success">SignUp</button> 
            </Link>
             </div> 
            
            
        )
    }
}


export default Home;
