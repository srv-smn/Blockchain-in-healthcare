import React from "react"
import './footer.css'
import { AiFillGithub,AiFillFacebook,AiFillLinkedin } from "react-icons/ai";
import {Route,Link} from 'react-router-dom'
import './../../Containers/LoginPage/UserReg'

const Footer = () => {
    return( 
        <footer>
            <div className="main-footer">
             <div className="container">
              <div className="row1">
                <div className="footer-element">
                    <Link to="home">Home</Link>
                </div>
                <div className="footer-element"><a href="">About</a></div>
                <div className="footer-element"><a href="">Help</a></div>
                <div className="footer-element"><a href="">Contact</a></div>
                <div className="footer-element">
                    <Link to="newform">New Form</Link>
                </div>
                <div className="icon"><a href=""><AiFillFacebook size="25px"/></a></div>
                <div className="footer-icon"><a href=""><AiFillGithub size="25px"/></a></div>
                <div className="footer-icon"><a href=""><AiFillLinkedin size="25px" /></a></div>
              </div>  
                
              <div className="row2">&#169; 2020 Blockchain-in-healthcare. All Rights Reserved</div>
             </div>
            </div>  
        </footer>
    )
  }
  
  export default Footer;
