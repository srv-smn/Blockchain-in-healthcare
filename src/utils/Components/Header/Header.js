 import React from "react";
 import {Button,Form,FormControl,NavDropdown,Nav,Navbar} from 'react-bootstrap'
 import './header.css'
 import web3 from '../../../ethereum/web3'

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    state = {
        address:''
    }

   async componentDidMount(){
        const a = await web3.eth.getAccounts();
       this.setState({address:a[0]})
    
    }
    render()
    {
     return (
        <div className="header-main">
        <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/">HealthCare</Navbar.Brand>
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
            <div style = {{color:'white',}}>
            {this.state.address}

            </div>
        </Navbar.Collapse>
        </Navbar>
        </div>
     );
    }
 };

 export default Header;

