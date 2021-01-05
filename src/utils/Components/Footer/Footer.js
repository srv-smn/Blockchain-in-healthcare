import React from "react"
import './footer.css'
import { AiFillGithub,AiFillFacebook,AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return( 
        <footer>
            <div className="main-footer">
             <div className="container">
              <div className="row">
                <div className="footer-element"><a href="">Home</a></div>
                <div className="footer-element"><a href="">About</a></div>
                <div className="footer-element"><a href="">Help</a></div>
                <div className="footer-element"><a href="">Contact</a></div>
                <div className="icon"><a href=""><AiFillFacebook size="25px"/></a></div>
                <div className="footer-icon"><a href=""><AiFillGithub size="25px"/></a></div>
                <div className="footer-icon"><a href=""><AiFillLinkedin size="25px" /></a></div>
              </div>  
                
              <div className="row3">&#169; 2020 Blockchain-in-healthcare. All Rights Reserved</div>
             </div>
            </div>  
        </footer>
    )
  }
  
  export default Footer;
