 import React from "react";
 import {Button,Form,FormControl,NavDropdown,Nav,Navbar} from 'react-bootstrap'
 import './header.css'

import 'bootstrap/dist/css/bootstrap.min.css';
 const Header = () => {
     return (
        <div className="header-main">
        <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home">HealthCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-items">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <NavDropdown title="Features" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Find Doctor</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </div>
     );
 };

 export default Header;

