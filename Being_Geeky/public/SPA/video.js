import React from 'react';
import "./style.css";


class Video extends React.Component 
{
    render()
    {
        return (
            <div className=" jumbotron three" id="video">
<h2 className="heading2">The video lecture you shouldn't miss</h2>
<p className="content2">With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he
spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy 
texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically 
create longer sections of the Lorem Ipsum text or various other filler texts.
</p>
    <a href="#geeky"><button className="btn btn-dark button">Read More</button></a>
    <br/>
<img src={require("./image3.png")} alt="video" className="image2"/>
</div>
        )
    }
}    

export default Video;
