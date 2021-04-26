import React, { useState } from 'react';
import {FormControl,Button,InputGroup,Table} from 'react-bootstrap'
import './searchdoc.css'

const SearchDoc= () => {

    const [searchdoc, setSearchdoc] = useState({
        cityofdoc: ""
    })

    const [data,setData] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchdoc({...searchdoc, [name]: value})
    }
    
    const handleSubmit = (e) =>{
        alert('Searching...')
        e.preventDefault();
        const doctor = {...searchdoc, id:new Date()}
        setData([...data, doctor])
        console.log(data)

        setSearchdoc({cityofdoc: ""})
    }    

    return (
        <div className="search-doc-main">
            <div className="search-container">
                <h1>Find a Doctor</h1>
                <h3>Search a doctor in your location</h3>
                <InputGroup className="mb-4">
                    <FormControl
                    name='cityofdoc'
                    placeholder="Enter a City"
                    aria-label="city name"
                    value = {searchdoc.cityofdoc}
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

export default SearchDoc;