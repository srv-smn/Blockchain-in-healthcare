import React from 'react'
import './doctorregisteration.css'
import { Form, Input,Button,Message } from 'semantic-ui-react'
import web3 from '../../../ethereum/web3'
import Admin from '../../../ethereum/Admin'
import {connectToPatients,
  connectToDoctor,
  addToPatients,
  addToDoctor,
  doctorDetails,
  patientDetails
} from '../../Eth/Ethutil'

class DoctorRegisteration extends React.Component{

 constructor(props) {
   super(props);
   this.state = {
     loading:false,
    name: '',
   selectBloodgrp : "",
   dob : "",
   email: "",
   mobno : "",
   adharno: "",
   identity : "",
   blockchainaddress: '',
   address : "",
   zip: "",
   state: "",
   country: "",
   errorMessage:'',
   hidden:true
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleDropdownChange = this.handleDropdownChange.bind(this);
 }
 async componentDidMount(){
  const accounts = await web3.eth.getAccounts(); 
  const dExist = await Admin.methods.existD(accounts[0]).call()
  const pExist = await Admin.methods.existP(accounts[0]).call()
  console.log(dExist,pExist );

  if(dExist){
    const dAddr = await addToDoctor(accounts[0])
    console.log('dAddr',dAddr);
    const {nme,mno,id} =  await doctorDetails(dAddr)
    console.log('details',nme,mno,id);
  }

  if(pExist){
    const pAddr = await addToPatients(accounts[0])
    console.log('pAddr',pAddr);
    const {nme,mno,bg} = await patientDetails(pAddr)
    console.log('details',nme,mno,bg);
  }


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
    selectGender: e.target.value
  });
}


 async handleSubmit(event) {

  try {
    this.setState({loading:true})
    event.preventDefault();
     console.log(this.state)
     const accounts = await web3.eth.getAccounts(); 
     
  console.log(122);
     await Admin.methods.addDoctor(
       this.state.name,
       this.state.adharno,
       this.state.mobno,
       this.state.blockchainaddress,
       this.state.identity
     ).send({
      from: accounts[0]
     })
     console.log(123);
     this.setState({
     name:"",
     selectBloodgrp : "",
     dob : "",
     email: "",
     mobno : "",
     adharno: '',
     identity : "",
     blockchainaddress: "",
     address : "",
     zip: "",
     state: "",
     country: "",
     });
    
  } catch (error) {
    this.setState({errorMessage: error.message, hidden:false});
    
  }
  this.setState({loading:false});
   
 }

 isFormValid = () => {
  const {
    name,
   selectBloodgrp,
   dob,
   email,
   mobno ,
   adharno,
   identity ,
   blockchainaddress,
   address ,
   zip,
   state,
   country,
   } =  this.state

   console.log("in button");
  return name && selectBloodgrp && dob && email && mobno && adharno && identity && blockchainaddress && address && zip && state && country
 }


 render(){
    return(
      <div className="main-reg-form">
      <Form className="reg-form" action='' onSubmit={this.handleSubmit}>
        <h2>Doctor Registration</h2>
        <hr />
        <Form.Field
             id='form-input-control-name'
             name="name"
             control={Input}
             label='Name'
             placeholder='Full Name'
             value = {this.state.name}
             onChange = {this.handleChange}
             required
           />
          <Form.Group width='equals'>
          <label className='fieldcss'>
            Blood Group
            <select id="dropdown-2" onChange={this.handleDropdownChange}>
              <option value="N/A">N/A</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB-</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </label>   
          
          <div className="fieldcss">
          <label>Date of Birth
            <input
             id='dob'
            name="dob"
             type="date" 
             placeholder='dd-mm-yyyy'
             value = {this.state.dob}
            onChange = {this.handleChange}/>
            </label>
          </div>
        </Form.Group>  
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
          id='adharno'
          name='adharno'
          control={Input}
          label='Adhar No.'
          placeholder='Adhar no.'
          value = {this.state.adharno}
            onChange = {this.handleChange}
          required
          width={10}
        />
        <Form.Field
          id='identity'
          name='identity'
          control={Input}
          label='Identity No.'
          placeholder='Identity no.'
          value = {this.state.identity}
            onChange = {this.handleChange}
          required
          width={10}
        />
        <Form.Field
          id='blockchainaddress'
          name='blockchainaddress'
          control={Input}
          label='Blockchain Address'
          placeholder='Blockchain Address'
          value = {this.state.blockchainaddress}
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
      
      <Button primary onClick = {this.handleSubmit} disabled={!this.isFormValid()} loading ={this.state.loading} > Submit</Button>
      

     </Form>
     <Message error header="Oops!" content={this.state.errorMessage} hidden = {this.state.hidden}  negetive compact/>
     </div>
   )
}
}
export default DoctorRegisteration;