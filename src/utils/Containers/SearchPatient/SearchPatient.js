import React from 'react';
import {FormControl,Button,InputGroup,Table} from 'react-bootstrap'
import './searchpatient.css'

class SearchPatient extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('searching');
        console.log(this.state)
        event.preventDefault();
        this.setState({value: ''});
      }

    render(){

    return (
        <div className="search-patient-main">
            <div className="search-container">
                <h1>Find a Patient</h1>
                <h3>Search a Patient in your location</h3>
                <InputGroup className="mb-4">
                    <FormControl
                    placeholder="Enter a City"
                    aria-label="city name"
                    value = {this.state.value}
                    onChange = {this.handleChange}
                />
                <InputGroup.Append>
                    <Button variant="success" onClick={this.handleSubmit}>Search</Button>
                </InputGroup.Append>
                </InputGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Mobile No.</th>
                        <th>Blood Group</th>
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
}
export default SearchPatient;