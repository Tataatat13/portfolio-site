import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/img/T.Natalia.svg";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";
import {
    BrowserRouter as Router
        } from "react-router-dom";



export const NavBar =()=> {
const [activeLink, setActiveLink]= useState('home');
const [scrolled, setScrolled]= useState(false);

useEffect(() => {
    const onScrool = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    window.addEventListener("scroll", onScrool);
    return () => window.removeEventListener("scroll", onScrool);
},[])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

    return (
        <Router>
        <Navbar expand="lg" className={classNames("body-tertiary", { scrolled })}>
        <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link   
                    href="#home" 
                    className={classNames("navbar-link", { active: activeLink === "home" })}
                    onClick={() => onUpdateActiveLink ('home')}
                    >
                        Home
                </Nav.Link>
                <Nav.Link 
                    href="#skills" 
                    className={classNames("navbar-link", { active: activeLink === "skills" })}
                    onClick={() => onUpdateActiveLink ('skills')}
                    >
                        Skills
                </Nav.Link>
                <Nav.Link 
                    href="#projects" 
                    className={classNames("navbar-link", { active: activeLink === "projects" })} 
                    onClick={() => onUpdateActiveLink ('projects')}
                    >
                        Projects
                </Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/natalia-ten-337259240/" target="_blank" rel="noopener noreferrer"><CiLinkedin className="img" color="white"/></a>
                    <a href="https://github.com/Tataatat13" target="_blank" rel="noopener noreferrer"><FaGithub className="img" color="white"/></a>
                    <a href="https://www.instagram.com/t.natalia13?igsh=ZHhyN2Fsb2l6YWR6&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram className="img" color="white"/></a>
                </div>
                <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </Router>
    )
}