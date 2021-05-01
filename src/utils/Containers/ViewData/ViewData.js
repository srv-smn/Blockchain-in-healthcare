import React, { Component } from 'react'
import { FaUser,FaAddressCard,FaNotesMedical, FaKey } from 'react-icons/fa'
import './viewdata.css'


class ViewData extends Component {
    render() {
        return (
            <div className="viewdata">
            <div className="container">
            <h1>View Patient's Data</h1>
            <div className="patient-cards">
                
              <div class="ui cards">
              <div className="card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 detail-1"><FaUser size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 card-content">
                                <h2>Kasturi</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 card-content">
                                <h4>0123456789</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 card-content"><h4>Blood Group : A+</h4></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                  <div className="container">
                  <div className="row">
                      <div className="col-4 access-1">
                        <FaKey size='4em' color='white' className="faicons"/>
                      </div>  
                      <div className="col-8 access-2">  
                        <div className="row">
                        <label>Read
                        <input type="checkbox" name="switch" class="check" />
                        </label>
                        </div>
                        <div className="row">
                        <label>Read + Write
                        <input type="checkbox" name="switch" class="check" />
                        </label>
                       </div>
                      </div>   
                    </div>
                  </div>
              </div>
                </div> 
                </div> 
            </div>

            <div className="displayform">
                <div className="container">
                    <div>

                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dapibus nisi, et suscipit ligula. 
                            Phasellus pulvinar orci est, in facilisis leo cursus nec. Aliquam sed urna at diam mattis finibus. Vestibulum eget pharetra dolor.
                            urabitur vehicula ante sed magna luctus placerat. Sed efficitur felis a turpis interdum, in sagittis tellus egestas.
                        </p>
                        <h4>Patient blockchain address</h4>
                        
                        <div>
                            <h4>File</h4>
                        </div>
                    </div>

                </div>
            </div>


        </div>

        )
    }
}

export default ViewData;
