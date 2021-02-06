import React from 'react';
import "./style.css";


class Footer extends React.Component 
{
    render()
    {
        return (
            <footer>
    <div className="container">
        <div className="footer-cols">
            <ul>
                <li className="listEle">Address</li><hr/>
                <li><a>ZZZZ workshop</a></li>
                <li><a>Street 43 ,building 4A</a></li>
                <li><a>Industrial Area</a></li>
                <li><a>Aqwertyu</a></li>
                <li><a>Mumbai</a></li>
            </ul>
            <ul>
                <li className="listEle">Clients</li><hr/>
                <li><a>XYZ org</a></li>
                <li><a>ABC org</a></li>
                <li><a>UK org</a></li>
                <li><a>Qwerty Corp</a></li>
                <li><a>ZAQ PVT</a></li>
            </ul>
            <ul>
                <li className="listEle">HTML5,CSS,JS</li><hr/>
                <li><a>React</a></li>
                <li><a>Angular</a></li>
                <li><a>NodeJS</a></li>
                <li><a>Django</a></li>
            </ul>
            <ul>
                <li className="listEle">About Being Geeky</li><hr/>
                <li><a>About CEO</a></li>
                <li><a>About Team</a></li>
                <li><a>Loaction</a></li>
                <li><a>Working</a></li>
                <li><a>Atmosphere</a></li>
                <li><a>Contact Being</a></li>
                <li><a>Geeky</a></li>
            </ul>
        </div>
    </div>
</footer>
        )
    }
}

export default Footer
