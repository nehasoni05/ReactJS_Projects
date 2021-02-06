import React from 'react';
import "./style.css";


class Tutorials extends React.Component 
{
    render()
    {
        return (
            <div className="jumbotron two" style={{backgroundColor:'rgb(71, 111, 112)'}} id="tutorial">
    <h1 className="heading3">Documentation</h1>
    <h2 className="heading2">All genuine Documentation at one place</h2>
    <p className="content2">Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The
    most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less 
    corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European 
    languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract 
    the viewer's attention from the layout.</p>
<a href="#geeky"><button className="btn btn-dark button">Start your Trial Now</button></a>
<p style={{marginTop:'2%'}}> You can download Being Geeky from app store or playstore.</p>
<img src={require("./image1.png")} className="image1" alt="tutorials"/>
</div>

    )
    }
}

export default Tutorials;
