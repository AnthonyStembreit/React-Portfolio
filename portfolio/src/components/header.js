import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function Header(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Anthony Stematz-Breitling</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
}