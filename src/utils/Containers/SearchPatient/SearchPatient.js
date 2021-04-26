import React, {useState} from 'react';
import {FormControl,Button,InputGroup,Table} from 'react-bootstrap'
import './searchpatient.css'

const SearchPatient= () => {
    
    const [searchpat, setSearchpat] = useState({
        cityofpatient: ""
    })

    const [data,setData] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchpat({...searchpat, [name]: value})
    }
    
    const handleSubmit = (e) =>{
        alert('Searching...')
        e.preventDefault();
        const patient = {...searchpat, id:new Date()}
        setData([...data, patient])
        console.log(data)

        setSearchpat({cityofpatient: ""})
    }    

    return (
        <div className="search-patient-main">
            <div className="search-container">
                <h1>Find a Patient</h1>
                <h3>Search a patient in your location</h3>
                <InputGroup className="mb-4">
                    <FormControl
                    placeholder="Enter a City"
                    aria-label="city name"
                    name='cityofpatient'
                    value = {searchpat.cityofpatient}
                    onChange = {handleInput}
                />
                <InputGroup.Append>
                    <Button variant="success" onClick={handleSubmit}>Search</Button>
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