import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './footer.css'

export default function PageFooter() {
    return (
        <Navbar sticky="bottom" id="footer">
            <Nav className="mr-auto">
                <a target="_blank" href="https://github.com/AnthonyStembreit">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="mailto:stembreit@gmail.com">
                    <i class="fas fa-envelope"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/anthony-stembreit">
                    <i class="fab fa-linkedin"></i>
                </a>
            </Nav>
        </Navbar>
    )
}