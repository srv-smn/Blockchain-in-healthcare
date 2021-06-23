import React from 'react'
import './patientregisteration.css'
import { Form, Input, Button,Message } from 'semantic-ui-react'
import web3 from '../../../ethereum/web3'
import Admin from '../../../ethereum/Admin'

class PatientRegisteration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      errorMessage:'',
      hidden:true,
      name: "",
      selectBloodgrp: "",
      dob: "",
      email: "",
      mobno: "",
      adharno: "",
      blockchainaddress: "",
      address: "",
      zip: "",
      state: "",
      country: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDropdownChange(e) {
    this.setState({
      selectBloodgrp: e.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({loading:true})

    try {
      const accounts = await web3.eth.getAccounts();

    const patient = await Admin.methods.addPatient(
      this.state.name,
      this.state.adharno,
      this.state.selectBloodgrp,
      this.state.mobno,
      this.state.blockchainaddress,
    ).send({
      from: accounts[0]
    })
    this.setState({
      name: "",
      selectBloodgrp: "",
      dob: "",
      email: "",
      mobno: "",
      adharno: "",
      blockchainaddress: "",
      address: "",
      zip: "",
      state: "",
      country: "",
    });

      
    } catch (error) {
      this.setState({errorMessage: error.message, hidden:false});
      
    }
  this.setState({loading:false})
  }

  isFormValid = () => {
    const {
      name,
     selectBloodgrp,
     dob,
     email,
     mobno ,
     adharno,
     blockchainaddress,
     address ,
     zip,
     state,
     country,
     } =  this.state
  
     console.log("in button");
    return name && selectBloodgrp && dob && email && mobno && adharno && blockchainaddress && address && zip && state && country
   }


  render() {
    return (
      <div className="main-reg-form-pat">
        <Form className="reg-form-pat" action='' onSubmit={this.handleSubmit}>
          <h2>Patient Registration</h2>
          <hr />
          <Form>
            <Form.Field
              id='form-input-control-name'
              name="name"
              control={Input}
              label='Name'
              placeholder='Full Name'
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </Form>
          <Form.Group width='equals'>
            <label className='fieldcss'>
              Blood Group
            <select required id="dropdown-2" onChange={this.handleDropdownChange}>
                <option value="N/A">N/A</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </label>
            &nbsp;&nbsp;&nbsp;
            <div className="fieldcss">
              <label>Date of Birth
            <input
                  id='dob'
                  name="dob"
                  type="date"
                  placeholder='dd-mm-yyyy'
                  value={this.state.dob}
                  onChange={this.handleChange} />
              </label>
            </div>
          </Form.Group>
          <Form.Field
            id='form-input-control-error-email'
            name="email"
            control={Input}
            label='Email'
            placeholder='joe@example.com'
            value={this.state.email}
            onChange={this.handleChange}
            width={10}
            required
          />
          <Form.Field
            id='mobno'
            name='mobno'
            control={Input}
            label='Mobile no.'
            placeholder='Mobile no.'
            value={this.state.mobno}
            onChange={this.handleChange}
            required
            width={10}
          />
          <Form.Field
            id='adharno'
            name='adharno'
            control={Input}
            label='Adhar no.'
            placeholder='Adhar no.'
            value={this.state.adharno}
            onChange={this.handleChange}
            required
            width={10}
          />
          <Form.Field
            id='blockchainaddress'
            name='blockchainaddress'
            control={Input}
            label='Blockchain Address'
            placeholder='Blockchain Address'
            value={this.state.blockchainaddress}
            onChange={this.handleChange}
            required
            width={10}
          />

          <Form.Field
            id='address'
            name='address'
            control={Input}
            label='Address'
            placeholder='Address'
            value={this.state.address}
            onChange={this.handleChange}
            required
          />
          <Form.Group>
            <Form.Field
              id='Zip Code'
              name='zip'
              control={Input}
              label='Zip Code'
              placeholder='Zip Code'
              value={this.state.zip}
              onChange={this.handleChange}
              required
            />
            <Form.Field
              id='state'
              name='state'
              control={Input}
              label='State'
              placeholder='State'
              value={this.state.state}
              onChange={this.handleChange}
              required
            />
            <Form.Field
              id='Country'
              name='country'
              control={Input}
              label='Country'
              placeholder='Country'
              value={this.state.country}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <br />
          <div style={{textAlign:"center"}}>
          <Button primary onClick = {this.handleSubmit}  disabled={!this.isFormValid()} loading ={this.state.loading} > Submit</Button>
          </div>
        </Form>
        <Message error header="Oops!" content={this.state.errorMessage} hidden = {this.state.hidden}  negetive compact/>
        
      </div>
    )
  }
}
export default PatientRegisteration;