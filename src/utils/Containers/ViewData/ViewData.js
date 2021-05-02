import React, { Component } from 'react'
import { FaUser, FaAddressCard, FaNotesMedical, FaKey } from 'react-icons/fa'
import './viewdata.css'
import web3 from '../../../ethereum/web3'
import Admin from '../../../ethereum/Admin'
import {
    connectToPatients,
    connectToDoctor,
    addToPatients,
    addToDoctor,
    doctorDetails,
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
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }

    async componentDidMount() {
        console.log(this.props.location.myCustomProps
        );
        const { nme, mno, bg } = await patientDetails(this.props.location.myCustomProps.patient)
        const { read, write } = await rwAccess(this.props.location.myCustomProps.pId, this.props.location.myCustomProps.dAddr)


        if (read == true) {
            this.setState({ r: <TiTick size="2em" /> })
        }
        if (write == true) {
            this.setState({ rw: <TiTick size="2em" /> })
        }
        this.setState({
            mno,
            bg

        })


    }

    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    render() {
        return (
            <div className="viewdata">
                <div className="">
                    <h1>View Patient's Data</h1>
                    <div className="patient-cards">

                        <div class="ui cards">
                            <div className="card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 detail-1"><FaUser size='4em' color='white' className="faicons" /></div>
                                        <div className="col-8 card-content">
                                            <h2>{this.props.location.myCustomProps.pName}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 detail-2"><FaAddressCard size='4em' color='white' className="faicons" /></div>
                                        <div className="col-8 card-content">
                                            <h4>{this.state.mno}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 detail-3"><FaNotesMedical size='4em' color='white' className="faicons" /></div>
                                        <div className="col-8 card-content"><h4>Blood Group : {this.state.bg}</h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
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

                <div className="displayform">
                    <div className="container">
                        <div>

                            <h4>Details</h4>
                            <p><h5>Remark:</h5>  {this.props.location.myCustomProps.details}
                            </p>
                            <p><h5>Date:</h5>  {this.props.location.myCustomProps.date}
                            </p>
                            <h4>Patient blockchain address</h4>
                            <p>{this.props.location.myCustomProps.pId}</p>

                            <div>
                                <h4>File</h4>
                                <Button variant="primary" onClick={this.handleShow}>
                                    Launch demo modal
                                    </Button>


                                <Modal show={this.state.show} onHide={this.handleClose} size = 'lg'>
                                    <Modal.Header closeButton>
                                        <Modal.Title>PRESCRIPTION</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <iframe src="https://ipfs.io/ipfs/QmSYfr5Lp8xekkBrA8mKSmdw7vBntFKvCGwpmrw9Vp7JeX" style={{width:'500%' ,height:'500px'}} className = 'img-fluid'frameBorder="0"></iframe>
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
                </div>


            </div >

        )
    }
}

export default ViewData;
