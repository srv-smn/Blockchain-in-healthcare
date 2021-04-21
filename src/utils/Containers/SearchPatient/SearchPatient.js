import React from 'react';
import {FormControl,Button,InputGroup,Table} from 'react-bootstrap'
import './searchpatient.css'

const SearchPatient= () => {
    return (
        <div className="search-patient-main">
            <div className="search-container">
                <h1>Find a Patient</h1>
                <h3>Search a patient in your location</h3>
                <InputGroup className="mb-4">
                    <FormControl
                    placeholder="Enter a City"
                    aria-label="city name"
                />
                <InputGroup.Append>
                    <Button variant="success">Search</Button>
                </InputGroup.Append>
                </InputGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                 </Table>   
            </div>
        </div>
    )
}

export default SearchPatient;