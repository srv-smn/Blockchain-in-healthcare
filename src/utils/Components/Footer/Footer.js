import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import { FaPhoneSquare,FaEnvelope,FaHome,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import './../../Containers/UserReg/UserReg'

const Footer = () => {
    return( 
        <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4>Features</h4>
                    <p>Find Doctor</p>
                    <p>Privacy Policy</p>
                </div>
                <div class="col-md-4">
                        <h4>Quick Contact</h4>
                        <p><FaPhoneSquare />&nbsp; +91 0123456789</p>
                        <p><FaEnvelope />&nbsp; abc@gmail.com</p>
                        <p><FaHome />&nbsp; xyz Road, ABC City</p>
                </div>
                <div class="col-md-4">
                        <h4>Follow us on</h4>
                        <p><FaFacebook />&nbsp; HealthCare</p>
                        <p><FaLinkedin />&nbsp; HealthCare.com</p>
                        <p><FaTwitter />&nbsp; twitter.com</p>
                </div>  
            </div> 
        </div>
        <hr />
        <p className="copyright">&#169; 2021 Blockchain-in-healthcare. All Rights Reserved</p>
    </div>
    )
  }
  
  export default Footer;
