import React from "react";
import "./Navbar.css";

export const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="/homepage">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="/profile">Profile</a>
        <a className="nav-item nav-link" href="/login">Logout</a>
      </div>
    </div>
  </nav>
  )
}
