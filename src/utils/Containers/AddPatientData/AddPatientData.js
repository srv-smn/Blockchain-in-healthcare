import React, { Component } from 'react'
import { Button, Form,TextArea } from 'semantic-ui-react'
import { FaUser,FaAddressCard,FaNotesMedical } from 'react-icons/fa'
import './addpatientdata.css'

class AddPatientData extends Component {

    constructor(props) {
        super(props);
        this.state = {
          description: '',
          selectedFile: null,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
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
           selectedFile: null
         });
      }
    

    render() {
        return (
        <div className="add-patient-main">
            <div className="container">
            <h1 className="greet">Welcome, hope you are good !!!</h1>
            <div className="patient-cards">
                
              <div class="ui cards">
              <div className="card">
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
                </div> 
                </div> 
            </div>

            <div className="patient-form-main">
                <div className="container">
                <div className="patient-form">        
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
}


export default AddPatientData;