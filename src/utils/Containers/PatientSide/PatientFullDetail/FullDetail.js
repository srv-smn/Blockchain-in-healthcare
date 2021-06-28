import React, { Component } from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import { FaUser,FaAddressCard,FaNotesMedical, FaBirthdayCake } from 'react-icons/fa'
import './patienthistory.css'
import web3 from '../../../../ethereum/web3'
import Admin from '../../../../ethereum/Admin'
import { Modal, Button } from 'react-bootstrap'

import {
	connectToPatients,
	connectToDoctor,
	addToPatients,
	patientDetails,
} from '../../../Eth/Ethutil'



class FullDetails extends Component {

	constructor(props) {
		super(props)
		this.state = {
			account: '',
			nme: '',
			mno: '',
			bg: '',
			record: [],
			finalObj: [],
			show: false,
			url:''
		}



		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
	}

	handleClose = () => this.setState({ show: false })
	handleShow = (event,hash) => {
		event.preventDefault()
		const url = 'https://ipfs.io/ipfs/'+ hash
		this.setState({ show: true , url})}

	async componentDidMount() {
		const accounts = await web3.eth.getAccounts();
		
		const pExist = await Admin.methods.existP(accounts[0]).call()
		if (!pExist) {
			alert("Patients does not exist on this address");
		}
		else {
			const pAddr = await addToPatients(accounts[0])
			const { nme, mno, bg,age } = await patientDetails(pAddr)

			const patient = await connectToPatients(pAddr)
			
			const len = await patient.methods.getLength().call({
				from: accounts[0]
			})

			let record = []

			for (let i = 0; i < len; i++) {

				const temp = await patient.methods.getReport(i).call({
					from: accounts[0]
				})
				let obj = {
					date: temp[0],
					doctor: temp[1],
					detail: temp[2],
					hash: temp[3]
				}
				
				record.push(obj)

			}


			let temp = []
			
			for (let i = 0; i < len; i++) {

				const doctor = await connectToDoctor(record[i].doctor);

				const dId = await doctor.methods.owner().call();

				const dName = await doctor.methods.name().call();

				const date = this.uToTime(record[i].date)

				const obj = {
					dName,
					dId,
					date,
					details: record[i].detail,
					hash:record[i].hash,
				}
				  temp =  [...temp, obj]
				
			}
			this.setState({
				nme,
				mno,
				bg,
				account: accounts[0],
				record,
				finalObj: temp,
				age
			})


		}
	}

	uToTime(t) {
		const milliseconds = t * 1000
		const dateObject = new Date(milliseconds)
		const humanDateFormat = dateObject.toLocaleString()
		const arr = humanDateFormat.split(',')
		return arr[0]
	}

	toHtm(){
		
	}

	render() {
		const paperstyle = {
			padding: '8px 5px',
			textAlign: 'center',
		}

		return (
			<div className="stages-main">

<div class="ui cards container-fluid" >

              <div className="card doc-card mr-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-1"><FaUser size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h2>{this.state.nme}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h4>{this.state.mno}</h4>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-4"><FaBirthdayCake size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h4>{this.state.age}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                            <h4>Blood Group: {this.state.bg}</h4></div>
                        </div>
                    </div>
                </div>
			</div>
			
                

				<div className="container-fluid">
					<div className="stages">
						<Timeline align="alternate">
								{
									this.state.finalObj.reverse().map((rec,index) =>{
										console.log(rec);
										return(
											<TimelineItem key ={index}>
											<TimelineSeparator>
												<TimelineDot color="primary" />
												<TimelineConnector />
											</TimelineSeparator>
											<TimelineContent>
												<Paper elevation={3} style={paperstyle}>
													Date : {rec.date} <br />
													Details: {rec.details} <br />
													Doctor: {rec.dName} <br />
													Doctor ID : {rec.dId} <br />
													<Button variant="primary" onClick={(event) => this.handleShow(event,rec.hash)} >
														View Document
												</Button>
												</Paper>
											</TimelineContent>
										</TimelineItem>
			
										)
									})
								}
								<Modal show={this.state.show} onHide={this.handleClose} size='lg'>
														<Modal.Header closeButton>
															<Modal.Title>PRESCRIPTION</Modal.Title>
														</Modal.Header>
														<Modal.Body>
															<iframe src={this.state.url} style={{ width: '500%', height: '500px' }} className='img-fluid' frameBorder="0"></iframe>
														</Modal.Body>
														<Modal.Footer>
															<Button variant="secondary" onClick={this.handleClose}>
																Close
													 </Button>
			
														</Modal.Footer>
													</Modal>

						</Timeline>
					</div>
				</div>
			</div>
		);
	}
}


export default FullDetails;