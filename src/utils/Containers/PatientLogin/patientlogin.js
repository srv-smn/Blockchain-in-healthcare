 import React from 'react'
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

class PatientLogin extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
     alert('A name was submitted: ' + this.state.firstname);
     console.log(this.state)
     this.setState({
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
     });
  }


  render(){
     return(
       <div className="main-reg-form">
       <Form className="reg-form" action='' onSubmit={this.handleSubmit}>
         <h2>Patient Registration</h2>
         <hr />
         <Form.Group widths='equal'>
           <Form.Field
             id='form-input-control-first-name'
             name="firstname"
             control={Input}
             label='First name'
             placeholder='First name'
             value = {this.state.firstname}
             onChange = {this.handleChange}
             required
           />
           <Form.Field
             id='form-input-control-last-name'
             name='lastname'
             control={Input}
             label='Last name'
             placeholder='Last name'
             value = {this.state.lastname}
             onChange = {this.handleChange}
             required
           />
           </Form.Group>
           <Form.Group widths='equal'>
           <Form.Field
             name="gender"
             control={Select}
             options={genderOptions}
             label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
             value = {this.state.gender}
             onChange = {this.handleChange}
             placeholder='Gender'
             search
             searchInput={{ id: 'form-select-control-gender' }}
           />
           <Form.Field
             name="bloodgrp"
             control={Select}
             options={bloodGroup}
             label={{ children: 'Blood Group', htmlFor: 'form-select-control-gender' }}
             value = {this.state.bloodgrp}
             onChange = {this.handleChange}
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
              value = {this.state.dob}
             onChange = {this.handleChange}/>
           </div>
         <Form.Field
           id='form-input-control-error-email'
           name="email"
           control={Input}
           label='Email'
           placeholder='joe@example.com'
           value = {this.state.email}
             onChange = {this.handleChange}
           width={10}
           required
         />
         <Form.Field
           id='mobno'
           name='mobno'
           control={Input}
           label='Mobile no.'
           placeholder='Mobile no.'
           value = {this.state.mobno}
             onChange = {this.handleChange}
           required
           width={10}
         />
       
        <Form.Field
           id='address'
           name='address'
           control={Input}
           label='Address'
           placeholder='Address'
           value = {this.state.address}
             onChange = {this.handleChange}
           required
         />
         <Form.Group>
         <Form.Field
           id='Zip Code'
           name='zip'
           control={Input}
           label='Zip Code'
           placeholder='Zip Code'
           value = {this.state.zip}
             onChange = {this.handleChange}
           required
         />
         <Form.Field
           id='state'
           name='state'
           control={Input}
           label='State'
           placeholder='State'
           value = {this.state.state}
             onChange = {this.handleChange}
          required
        />
        <Form.Field
          id='Country'
          name='country'
          control={Input}
          label='Country'
          placeholder='Country'
          value = {this.state.country}
             onChange = {this.handleChange}
          required
        />
        </Form.Group>
        <br />
        <input type="submit" value="Submit"/>

      </Form>
      </div>
    )
}
}
export default PatientLogin;