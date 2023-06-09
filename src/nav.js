import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" style={{ marginLeft: '20px' }} href="#">
        Alibae
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" style={{ marginLeft: '20px' }} href="#">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ marginLeft: '10px' }} href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ marginLeft: '10px' }} href="#">
              Pricing
            </a>
          </li>
        
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;