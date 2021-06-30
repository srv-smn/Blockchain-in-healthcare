import React, { Component } from 'react'
import { FaUser, FaAddressCard, FaNotesMedical, FaKey } from 'react-icons/fa'
import './viewdata.css'
import web3 from '../../../ethereum/web3'
import Admin from '../../../ethereum/Admin'
import {
    patientDetails,
    rwAccess
} from '../../Eth/Ethutil'
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import { Modal, Button } from 'react-bootstrap'


class ViewData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mno: '',
            bg: '',
            r: <ImCross />,
            rw: <ImCross />,
            show: false,
            url:''
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }
    
    async componentDidMount() {
        if(this.props.location.myCustomProps.pName == "undefined"){
           return window.location = '/doctorhistory';
        }
        console.log(this.props.location.myCustomProps
        );
        const { nme, mno, bg } = await patientDetails(this.props.location.myCustomProps.patient)
        const { read, write } = await rwAccess(this.props.location.myCustomProps.pId, this.props.location.myCustomProps.dAddr)


        if (read === true) {
            this.setState({ r: <TiTick size="2em" /> })
        }
        if (write === true) {
            this.setState({ rw: <TiTick size="2em" /> })
        }
        const url = 'https://ipfs.io/ipfs/' + this.props.location.myCustomProps.hash

        this.setState({
            mno,
            bg,
            url

        })


    }

    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    render() {
        return (
            <div className="viewdata">
                <div>
                    <p style={{fontSize:'30px', marginBottom:'25px', marginLeft:'10px'}}>Patient's Data</p>
                    <div className="patient-cards">

                        <div class="ui cards container-fluid">
                            <div className="card ml-4 mr-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 detail-1"><FaUser size='4em' color='white' className="faicons" /></div>
                                        <div className="col-8 card-content">
                                            <h2>{this.props.location.myCustomProps.pName}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card ml-4 mr-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 detail-2"><FaAddressCard size='4em' color='white' className="faicons" /></div>
                                        <div className="col-8 card-content">
                                            <h4>{this.state.mno}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card ml-4 mr-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 detail-3"><FaNotesMedical size='4em' color='white' className="faicons" /></div>
                                        <div className="col-8 card-content"><h4>Blood Group : {this.state.bg}</h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card ml-4 mr-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 access-1">
                                            <FaKey size='4em' color='white' className="faicons" />
                                        </div>
                                        <div className="col-8 access-2">
                                            <div className="row">
                                                <div className="read-write">
                                                    Read &nbsp; {this.state.r} <br />
                                                         Write &nbsp; {this.state.rw}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p style={{fontSize:'30px', marginTop:'40px', marginLeft:'10px'}}>Report Information</p>
                <div className="container-fluid">
                    <div className="row">
                    <div className="mt-2 col-xl-4 col-md-12">
                    <div className='card card-box py-3' >
                        <div className="display-form">
                            <h3>Basic Information</h3>
                            <hr />
                            <p><b>Date:</b>  {this.props.location.myCustomProps.date}
                            </p>
                            <h4>Patient blockchain address</h4>
                            <p>{this.props.location.myCustomProps.pId}</p>  
                            </div>
                            </div>
                    </div>

                     <div className="mt-2 col-xl-4 col-md-12">
                     <div className='card card-box py-3'>
                        <div className="display-form">    
                            <h3>Health Details</h3>
                            <hr/>
                            <p><b>Disease/Injury : </b>  {this.props.location.myCustomProps.details.split("$")[0]}
                            </p>
                            <p><b>Description :</b> {this.props.location.myCustomProps.details.split("$")[1]}
                            </p>
                            <p><b>Blood Pressure : </b> {this.props.location.myCustomProps.details.split("$")[2]}
                            </p>
                        </div>
                        </div>        
                        </div>
                        
                        <div className="mt-2 col-xl-4 col-md-12">
                        <div className='card card-box py-3' >
                        <div className="display-form">
                            <h3>Report</h3><hr/>
                            <p><b>Report Type :</b> {this.props.location.myCustomProps.details.split("$")[4]}
                            </p><br/>
                            <div>
                                <p><b>Next Appointment Date :</b> {this.props.location.myCustomProps.details.split("$")[3]}
                                </p>
                                        
                            </div> 
                        </div>
                        </div>
                        </div>
                    </div>

                    <div style={{textAlign:'center'}}>
                    <Button variant="primary" onClick={this.handleShow}>
                                   SHOW PRESCRIPTION
                                    </Button>


                                <Modal show={this.state.show} onHide={this.handleClose} size = 'lg'>
                                    <Modal.Header closeButton>
                                        <Modal.Title>PRESCRIPTION</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <iframe src= {this.state.url} style={{width:'500%' ,height:'500px'}} className = 'img-fluid'frameBorder="0"></iframe>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Close
                                         </Button>
                                       
                                    </Modal.Footer>
                                </Modal> 
                        </div>        
                    </div>
                </div>


         

        )
    }
}

export default ViewData;
