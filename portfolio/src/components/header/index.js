import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './header.css'

export default function Header(){
    return(
        <Navbar >
        <Nav className="mr-auto">
        <Link to="/"
         className={
            window.location.pathname === "/" || window.location.pathname === "/home"
              ? "nav-link active"
              : "nav-link"
          }
          >About</Link>
        <Link to="/projects"
         className={
            window.location.pathname === "/" || window.location.pathname === "/home"
              ? "nav-link active"
              : "nav-link"
          }
          >Projects</Link>
        <Link to="/contact"
         className={
            window.location.pathname === "/" || window.location.pathname === "/home"
              ? "nav-link active"
              : "nav-link"
          }
          >Contact</Link>
        </Nav>
      </Navbar>
    )
}