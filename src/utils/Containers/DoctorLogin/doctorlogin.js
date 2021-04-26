import React, { useState } from 'react'
import './doctorlogin.css'
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

const DoctorLogin = () => {

  const [doctRegister , setDoctRegister] = useState({
    firstname : "",
    lastname : "",
    gender : '',
    bloodgrp : "",
    dob : "",
    email: "",
    mobno : "",
    identity : "",
    address : "",
    zip: "",
    state: "",
    country: "",
  })

  const [record,setRecord] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    
    setDoctRegister({...doctRegister, [name]: value})
  }

  const handleSubmit = (e) =>{
    alert('Form Submitted')
    e.preventDefault();

    const addedData = {...doctRegister, id:new Date()}
    setRecord([...record, addedData])
    console.log(record)

     setDoctRegister({
       firstname : "",
     lastname : "",
     gender : '',
     bloodgrp : "",
     dob : "",
     email: "",
     mobno : "",
     identity : "",
     address : "",
     zip: "",
     state: "",
     country: "",
     })
  }

 
    return(
      <div className="main-reg-form">
      <Form className="reg-form" action=''>
        <h2>Doctor Registration</h2>
        <hr />
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            name="firstname"
            control={Input}
            label='First name'
            placeholder='First name'
            value = {doctRegister.firstname}
            onChange = {handleInput}
            required
          />
          <Form.Field
            id='form-input-control-last-name'
            name='lastname'
            control={Input}
            label='Last name'
            placeholder='Last name'
            value = {doctRegister.lastname}
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
            value = {doctRegister.gender}
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
            value = {doctRegister.bloodgrp}
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
             value = {doctRegister.dob}
             onChange = {handleInput}/>
          </div>
        <Form.Field
          id='form-input-control-error-email'
          name="email"
          control={Input}
          label='Email'
          placeholder='joe@example.com'
          value = {doctRegister.email}
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
          value = {doctRegister.mobno}
          onChange = {handleInput}
          required
          width={10}
        />
        <Form.Field
          id='identity'
          name='identity'
          control={Input}
          label='Identity No.'
          placeholder='Identity No.'
          value = {doctRegister.identity}
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
          value = {doctRegister.address}
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
          value = {doctRegister.zip}
          onChange = {handleInput}
          required
        />
        <Form.Field
          id='state'
          name='state'
          control={Input}
          label='State'
          placeholder='State'
          value = {doctRegister.state}
          onChange = {handleInput}
          required
        />
        <Form.Field
          id='Country'
          name='country'
          control={Input}
          label='Country'
          placeholder='Country'
          value = {doctRegister.country}
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

export default DoctorLogin;
