import React, { Component } from 'react'
import {FaAddressCard,FaUserMd,FaNotesMedical} from 'react-icons/fa'
import {Form, Button} from 'react-bootstrap'
import './accesstodoctor.css'

class AccesstoDoctor extends Component {
    constructor(props){
        super(props);
        
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }
        handleChange=(e)=>{
            this.setState({value : e.target.value})
            console.log(this.state)
        }
    
    render() {
        return (
            <div className="access-to-doctor-main">
                <div className="container">
                <div class="ui cards">
                <div className="card doc-card">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 doc-detail-1"><FaUserMd size='4em' color='white' className="faicons"/></div>
                                <div className="col-8 doc-card-content">
                                    <h2>Srv Smn</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card doc-card">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 doc-detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                                <div className="col-8 doc-card-content">
                                    <h4>ID : 566779999990</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card doc-card">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 doc-detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                                <div className="col-8 doc-card-content">
                                    <h4>Blood Group : A+</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 

                <div className="access-to-doctor">
                <div className="container">
                <Form>
                    <Form.Group >
                        <Form.Label>Blockchain Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Blockchain Address"
                            value = {this.state.value}
                            onChange = {this.handleChange} />
                    </Form.Group>
                </Form>  

                <Button variant="success" className="py-2 btns">View</Button>
                <Button variant="primary" className="py-2">Write</Button>  
                </div> 
                </div> 
                </div>
                </div>
        )
    }
}


export default AccesstoDoctor;