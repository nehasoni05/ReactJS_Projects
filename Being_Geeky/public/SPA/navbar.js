import React, { useState } from 'react';
import "./style.css";

import "./bootstrap.min.css";


  const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
<a className="navbar-link text-white font-weight-bolder heading" href="/"> Being Geeky</a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" 
      aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
    <a className="nav-link text-white heading" href="/contact">Tutorials</a>
        <a className="nav-link text-white heading" href="/login">Video</a>
        <a className="nav-link text-white heading" href="/login">Coupons</a>
      </div>
    </nav>
  );
}


export default TopNav;
