import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './userreg.css'

const CardExampleFluid=()=>{
  return(
    <div className="card-main">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
          <Link to="doctorlogin">
          <div className="cardbox doctorcardbox">
            <h3>Doctor Registration</h3>
            </div>
            </Link>
          </div>
          
          <div className="col-md-6">
          <Link to="patientlogin">
          <div className="cardbox patientcardbox">
            <h3>Patient Registration</h3>
          </div>
          </Link>
          </div>
        </div>
    </div>
  </div>
  )
}


export default CardExampleFluid