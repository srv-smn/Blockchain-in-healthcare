import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import { FaUser,FaAddressCard,FaNotesMedical, FaKey } from 'react-icons/fa'
import './patienthistory.css'

const paperstyle={
	padding: '8px 1px',
	textAlign:'center',
}

export default function FullDetails() {
	return (
        <div className="stages-main">

        <div class="container">
            <div class="row">
            <div class="col-md-3">
            <div class="card-counter primary">
                <FaUser className='fa-icons'/>
                <span class="count-name">Pranali Patil</span>
            </div>
            </div>

            <div class="col-md-3">
            <div class="card-counter success">
                <FaAddressCard className='fa-icons'/>
                <span class="count-name">Mobile No.</span>
            </div>
            </div>

            <div class="col-md-3">
            <div class="card-counter danger">
                <FaNotesMedical className='fa-icons'/>
                <span class="count-name">A+</span>
            </div>
            </div>

        </div>
        </div>
        
        <div className="container">
        <div className="stages">
        <Timeline align="alternate">
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="primary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				<Paper elevation={3} style={paperstyle}>Date : 30/04/2021
				</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="primary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				<Paper elevation={3} style={paperstyle}>Doctor Name : srv smn
				</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="primary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				<Paper elevation={3}
					style={paperstyle}>
                    <h3>Comment</h3><br />comments to be written
				</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent>
				<Paper elevation={3}
					style={paperstyle}>CLICK HERE
				</Paper>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
        </div>
        </div>
    </div>
	);
}
