import React from "react";
import "./Navbar.css";

export const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="nav-item nav-link active" href="/homepage">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/profile">Profile</a>
      <a className="nav-item nav-link" href="/login">Logout</a>
    </nav>
  )
}
