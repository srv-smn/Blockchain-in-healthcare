import React, { useState } from 'react'
import './patientlogin.css'
import { Form, Input, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
const bloodGroup = [
  {key: 'A+', text: 'A+', value: 'A+'},
  {key: 'A-', text: 'A-', value: 'A-'},
  {key: 'B+', text: 'B+', value: 'B+'},
  {key: 'B-', text: 'B-', value: 'B-'},
  {key: 'AB+', text: 'AB+', value: 'AB+'},
  {key: 'AB-', text: 'AB-', value: 'AB-'},
  {key: 'O+', text: 'O+', value: 'O+'},
  {key: 'O-', text: 'O-', value: 'O-'},
]

const PatientLogin = () => {

  const [patientRegister , setPatientRegister] = useState({
    firstname : "",
    lastname : "",
    gender : '',
    bloodgrp : "",
    dob : "",
    email: "",
    mobno : "",
    address : "",
    zip: "",
    state: "",
    country: "",
  })

  const [record_patient,setRecordPatient] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //console.log(name , value)
    setPatientRegister({...patientRegister, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const addedDataPatient = {...patientRegister, id:new Date()}
    setRecordPatient([...record_patient, addedDataPatient])
    setPatientRegister({
      firstname : "",
      lastname : "",
      gender : '',
      bloodgrp : "",
      dob : "",
      email: "",
      mobno : "",
      address : "",
      zip: "",
      state: "",
      country: "",
    })
    console.log(record_patient)
    alert(patientRegister.firstname+' Your Form is Submitted Successfully')
    
  }

 
    return(
      <div className="main-reg-form">
      <Form className="reg-form" action=''>
        <h2>Patient Registration</h2>
        <hr />
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            name="firstname"
            control={Input}
            label='First name'
            placeholder='First name'
            value = {patientRegister.firstname}
            onChange = {handleInput}
            required
          />
          <Form.Field
            id='form-input-control-last-name'
            name='lastname'
            control={Input}
            label='Last name'
            placeholder='Last name'
            value = {patientRegister.lastname}
            onChange = {handleInput}
            required
          />
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Field
            name="gender"
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            value = {patientRegister.gender}
            onChange = {handleInput}
            placeholder='Gender'
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
          <Form.Field
            name="bloodgrp"
            control={Select}
            options={bloodGroup}
            label={{ children: 'Blood Group', htmlFor: 'form-select-control-gender' }}
            value = {patientRegister.bloodgrp}
            onChange = {handleInput}
            placeholder='Blood Group'
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
          </Form.Group>
          <div className="dob">
          <label>Date of Birth</label>
            <input
             id='dob'
             name="dob"
             type="date" 
             placeholder='dd-mm-yyyy'
             value = {patientRegister.dob}
             onChange = {handleInput}/>
          </div>
        <Form.Field
          id='form-input-control-error-email'
          name="email"
          control={Input}
          label='Email'
          placeholder='joe@example.com'
          value = {patientRegister.email}
          onChange = {handleInput}
          width={10}
          required
        />
        <Form.Field
          id='mobno'
          name='mobno'
          control={Input}
          label='Mobile no.'
          placeholder='Mobile no.'
          value = {patientRegister.mobno}
          onChange = {handleInput}
          required
          width={10}
        />
        
        <Form.Field
          id='address'
          name='address'
          control={Input}
          label='Address'
          placeholder='Address'
          value = {patientRegister.address}
          onChange = {handleInput}
          required
        />
        <Form.Group>
        <Form.Field
          id='Zip Code'
          name='zip'
          control={Input}
          label='Zip Code'
          placeholder='Zip Code'
          value = {patientRegister.zip}
          onChange = {handleInput}
          required
        />
        <Form.Field
          id='state'
          name='state'
          control={Input}
          label='State'
          placeholder='State'
          value = {patientRegister.state}
          onChange = {handleInput}
          required
        />
        <Form.Field
          id='Country'
          name='country'
          control={Input}
          label='Country'
          placeholder='Country'
          value = {patientRegister.country}
          onChange = {handleInput}
          required
        />
        </Form.Group>
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit}/>

      </Form>
      </div>
    )
}

export default PatientLogin;
