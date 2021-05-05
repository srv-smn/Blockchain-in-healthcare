 import React from "react";
 import {Nav,Navbar} from 'react-bootstrap'
 import './header.css'
 import web3 from '../../../ethereum/web3'
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderD extends React.Component {
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
            <Nav.Link href = '/doctorhistory' >Home</Nav.Link>
            <Nav.Link href = '/addpatientdata'>Add Data</Nav.Link>
            </Nav>
            &nbsp;
            <div id="google_translate_element" ></div> &nbsp;

            <div style = {{color:'white',}}>
            {this.state.address}

            </div>
        </Navbar.Collapse>
        </Navbar>
        </div>
     );
    }
 };

 export default HeaderD;

