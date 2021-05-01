import React, { Component } from 'react'
import { Form,TextArea } from 'semantic-ui-react'
import {FormControl,Button,InputGroup} from 'react-bootstrap'
import { FaUser,FaAddressCard,FaNotesMedical, FaKey } from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'

import './addpatientdata.css'

class AddPatientData extends Component {

    constructor(props) {
        super(props);
        this.state = {
          description: '',
          selectedFile: null,
          count:0,
          value:'',
          r : <ImCross />,
          rw : <ImCross />
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
      }

      viewHtml(){
          return(
              <div className="view-elements">
                
            <div class="ui cards">
            <div className="card add-card">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-1"><FaUser size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content">
                              <h2>Pranali Patil</h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content">
                              <h4>0123456789<br />
                              XYZ colony, Malkapur</h4>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content"><h4>Blood Group : A+</h4></div>
                      </div>
                  </div>
              </div>

              <div className="card">
                  <div className="container">
                  <div className="row">
                      <div className="col-4 access-1">
                        <FaKey size='4em' color='white' className="faicons"/>
                      </div>  
                      <div className="col-8 access-2">  
                        <div className="row">
                            <div className="read-write">
                            Read &nbsp; {this.state.r} <br />
                            Read + Write &nbsp; {this.state.rw}
                            </div>
                       </div>
                      </div>   
                    </div>
                  </div>
              </div>
             
              </div> 
              
              <div className="patient-form">
                <div className="card">
                <div className="card-body">        
                    <Form>
                        <Form.Field
                        id = 'description'
                        name='description'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        value = {this.state.description}
                        onChange = {this.handleChange}
                        required='required'/>

                        <div>
                            <input type="file" onChange={this.onFileChange} required/>
                        </div>
                        <br />
                        <Button type='submit' color='green'onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
                </div>
            </div> 
              </div>
              
         )
      }

      async componentDidMount(){
        let r = false;
        let rw = true;
        if(r==true){
            this.setState({r: <TiTick size="2em"/>})
        }
        if(rw==true){
            this.setState({rw: <TiTick size="2em"/>})
        }
      }

      handleSubmitSearch(event) {
        event.preventDefault();
        console.log(this.state.value)
        this.setState({count:1});
      }
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleChangeSearch(event) {
        this.setState({value: event.target.value});
      }
    
      onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      };



      handleSubmit(event) {
        event.preventDefault();
        // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile
      );
    
      if(this.state.description==='' && this.state.selectedFile===null){
          alert("Please enter the File and Description")
      }
      else{
          alert('Submitted Successfully')
      }
      // Details of the uploaded file
      console.log(this.state.selectedFile);
         console.log(this.state.description)
         this.setState({
           description:'',
           selectedFile: null,
         });
      }
    

    render() {

        let viewCond;
        if(this.state.count !== 0){
            viewCond = this.viewHtml()
        }
        return (
            <div className="add-patient-main">
            
                <h1 className="greet">Welcome, hope you are good !!!</h1>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Enter Blockchain address"
                    aria-label="city name"
                    value = {this.state.value}
                    onChange = {this.handleChangeSearch}
                />
                <InputGroup.Append>
                    <Button variant="success" onClick={this.handleSubmitSearch}>Search</Button>
                </InputGroup.Append>
                </InputGroup>
                <br/>
                { viewCond }
            
            </div>

        )
    }
}


export default AddPatientData;