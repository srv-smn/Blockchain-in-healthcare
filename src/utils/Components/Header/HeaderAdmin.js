 import React from "react";
 import {Button,Form,FormControl,NavDropdown,Nav,Navbar} from 'react-bootstrap'
 import './header.css'
 import web3 from '../../../ethereum/web3'
 import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderA extends React.Component {
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
            <Nav.Link href = '/doctorregisteration' >Register Doctor</Nav.Link>
            <Nav.Link href = '/doctorregisteration'>Register Patients</Nav.Link>
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

 export default HeaderA;

