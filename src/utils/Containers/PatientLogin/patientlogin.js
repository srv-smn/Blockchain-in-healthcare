import React from 'react'
import './patientlogin.css'
import { Form, Input, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
const bloodGroup = [
  {key: 'A', text: 'A+', value: 'A+'},
  {key: 'A', text: 'A-', value: 'A-'},
  {key: 'B', text: 'B+', value: 'B+'},
  {key: 'B', text: 'B-', value: 'B-'},
  {key: 'AB', text: 'AB+', value: 'AB+'},
  {key: 'AB', text: 'AB-', value: 'AB-'},
  {key: 'O', text: 'O+', value: 'O+'},
  {key: 'O', text: 'O-', value: 'O-'},
]

const PatientLogin = () => (
  <div className="main-reg-form">
  <Form className="reg-form">
    <h2>Patient Registration</h2>
    <hr />
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        required
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        required
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
      <Form.Field
        control={Select}
        options={bloodGroup}
        label={{ children: 'Blood Group', htmlFor: 'form-select-control-gender' }}
        placeholder='Blood Group'
        search
        searchInput={{ id: 'form-select-control-gender' }}
       />
      </Form.Group>
      <div className="dob">
      <label>Date of Birth</label>
        <input type="date" placeholder='dd-mm-yyyy'/>
      </div>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@example.com'
      width={10}
      required
    />
    <Form.Field
      id='mobno'
      control={Input}
      label='Mobile no.'
      placeholder='Mobile no.'
      required
      width={10}
    />
    
    <Form.Field
      id='address'
      control={Input}
      label='Address'
      placeholder='Address'
      required
    />
    <Form.Group>
    <Form.Field
      id='Zip Code'
      control={Input}
      label='Zip Code'
      placeholder='Zip Code'
      required
    />
    <Form.Field
      id='state'
      control={Input}
      label='State'
      placeholder='State'
      required
    />
    <Form.Field
      id='Country'
      control={Input}
      label='Country'
      placeholder='Country'
      required
    />
    </Form.Group>
    <br />
    <Form.Checkbox label='I agree to the Terms and Conditions' required/>
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Register'
    />

   </Form>
   </div>
)

export default PatientLogin;
