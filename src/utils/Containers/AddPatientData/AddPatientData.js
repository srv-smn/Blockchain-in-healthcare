import React, { Component } from 'react'
import { Form,TextArea, Message,Button, Input,Radio } from 'semantic-ui-react'
import {FormControl,InputGroup, Container, Row, Col} from 'react-bootstrap'
import { FaUser,FaAddressCard,FaNotesMedical, FaKey } from 'react-icons/fa'
import hospital from './../../../assets/hospital.png'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import './addpatientdata.css'
import web3 from '../../../ethereum/web3'
import Admin from '../../../ethereum/Admin'
import {
  connectToDoctor,
  addToPatients,
  addToDoctor,
  patientDetails,
  rwAccess
} from '../../Eth/Ethutil' ;

import ipfs from '../../../ipfs'
import { Link } from 'react-router-dom'


class AddPatientData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            sloading:false,
            errorMessage:'',
            hidden:true, 
            condition: '',   
          name:'',
          mno:'',
          bg:'',
          remark:'',
          bp: 'NA',
          nextdate:'NA',
          selectedFile: null,
          count:0,
          value:'',
          r : <ImCross />,
          rw : <ImCross />,
          account:'',
          disabled:true,
          pCAddr:''
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleSubmitShow = this.handleSubmitShow.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
      }
    

      viewHtml(){
          return(
              <div className="view-elements">
                
            <div class="ui cards">
            <div className="card ml-3 mr-3">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-1"><FaUser size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content">
                              <h2>{this.state.name}</h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card ml-4 mr-4">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content">
                              <h4>{this.state.mno}<br />
                              </h4>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card ml-4 mr-4">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content"><h4>Blood Group : {this.state.bg}</h4></div>
                      </div>
                  </div>
              </div>

              <div className="card ml-4 mr-4">
                  <div className="container-fluid">
                  <div className="row">
                      <div className="col-4 access-1">
                        <FaKey size='4em' color='white' className="faicons"/>
                      </div>  
                      <div className="col-8 access-2">  
                        <div className="row">
                            <div className="read-write">
                            Read &nbsp; {this.state.r} <br />
                            Write &nbsp; {this.state.rw}
                            </div>
                       </div>
                      </div>   
                    </div>
                  </div>
              </div>
             
              </div> 
              
              <div className="patient-form">
              <h1>Basic Information</h1>
                <div className="card">
                <div className="card-body">        
                    <Form unstackable>
                    <Form.Field
                        id = 'disease'
                        name='disease'
                        control={Input}
                        label='Disease/Injury'
                        placeholder='Disease/Injury'
                        value = {this.state.disease}
                        onChange = {this.handleChange}
                        required='required'/>

                        <Form.Field
                        id = 'remark'
                        name='remark'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        value = {this.state.remark}
                        onChange = {this.handleChange}
                        required='required'/>

                        <Form.Group widths="equal">
                         <Form.Field
                         className="mb-3"
                        id = 'bp'
                        name='bp'
                        control={Input}
                        label='Blood Pressure'
                        placeholder='Blood Pressure'
                        value = {this.state.bp}
                        onChange = {this.handleChange}
                       />

                       <label>Next Appointment Date
                        <input
                             className="mb-3"
                            id='nextdate'
                            name="nextdate"
                            type="date"
                            placeholder='dd-mm-yyyy'
                            value={this.state.nextdate}
                            onChange={this.handleChange} />
                        </label>
                        </Form.Group>

                        <div className="mb-3" onChange={this.handleRadio}>
                            <label className="mb-2">Report Type </label>
                            <input type="radio" value="Pathology Report" name="condition" /> Pathology Report &nbsp;
                            <input type="radio" value="Consultation" name="condition" /> Consultation &nbsp;
                            <input type="radio" value="Operative Report (OP)" name="condition" /> Operative Report (OP) &nbsp;
                            <input type="radio" value="Discharge Summary (DS)" name="condition" /> Discharge Summary (DS) &nbsp;
                            <input type="radio" value="Radiology Report" name="condition" /> Radiology Report &nbsp;     
                        </div>

                        <div>
                            <input type="file" onChange={this.onFileChange} required/>
                        </div>
                        <br />
                        <div style={{textAlign:"center"}}>
                        <Button className="mr-5 mb-2" type='submit' color='green' onClick={this.handleSubmit} disabled={!this.isFormValid()} loading ={this.state.loading}>Submit</Button>
                        
                        <Link to = {
                                                    { 
                                                        pathname: "/viewtodoctor",
                                                        myCustomProps: {value:this.state.value}
                                                    }
                                                }>
                    <Button primary className="mr-5 mb-2" onClick={this.handleSubmitShow} >Previos Record</Button>
                    
                    </Link>
                    <Message error header="Oops!" content={this.state.errorMessage} hidden = {this.state.hidden}  negetive compact/>
                    </div>
                    </Form>
                </div>
                </div>
            </div> 
              </div>
              
         )
      }

 async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        const dExist = await Admin.methods.existD(accounts[0]).call()
        if(!dExist)
        alert("Doctor does not exist on this address");
        this.setState({
          account:accounts[0]
        })
      }

      async handleSubmitSearch(event) {
        this.setState({sloading:true})
        event.preventDefault();
        
        console.log(this.state.value)
        let pExist = false;
        if(web3.utils.checkAddressChecksum(this.state.value)){
          pExist = await Admin.methods.existP(this.state.value).call()
        }

        if(!pExist)
        {
          alert("Patients does not exist on this address");
        }
        else{
          const pAddr = await addToPatients(this.state.value);
          this.setState({
            pCAddr: pAddr
          })
          const {nme,mno,bg} = await patientDetails(pAddr)
          this.setState({
            name:nme,
            mno,
            bg,
            count:1,
          })
        }
        let r,rw

        if(pExist){
          let{read,write} =  await rwAccess(this.state.value, this.state.account)
          r = read
          rw = write
        }
        console.log(r,rw)

        if(r===true){
            this.setState({r: <TiTick size="2em"/>})
        }
        if(rw===true){
            this.setState({rw: <TiTick size="2em"/>})
        }
        this.setState({sloading:false})
        window.scrollTo(0, 700);
      }
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(value)
      }
      handleChangeSearch(event) {
        this.setState({value: event.target.value});
      }
    
      onFileChange = event => {

        event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ selectedFile: Buffer(reader.result) })
      console.log('buffer', this.state.selectedFile)
    }
      };

      handleRadio(event) {
        console.log(event.target.value);
        this.setState({condition: event.target.value})
      }

      async handleSubmit(event) {
        event.preventDefault();
        this.setState({loading:true})
        // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile
      );
    
      if(this.state.remark==='' && this.state.selectedFile===null){
          alert("Please enter the File and Description")
      }
      // Details of the uploaded file
        //  console.log(this.state.selectedFile);
        //  console.log(this.state.remark)
        //  console.log(this.state.disease)
        //  console.log(this.state.bp)
        //  console.log(this.state.nextdate)
        //  console.log(this.state.condition)
          
        let description = this.state.disease +"$"+ this.state.remark +"$"+ this.state.bp +"$"+ this.state.nextdate +"$"+ this.state.condition;
        console.log(description)
        console.log(this.state.selectedFile)
        
        


         try{
          const ipfsUpload =  await ipfs.files.add(this.state.selectedFile)
          console.log(typeof ipfsUpload[0].hash);
          const hash = ipfsUpload[0].hash
          const dAddr = await addToDoctor(this.state.account);
          console.log(1);
          const doctor = await connectToDoctor(dAddr)
          console.log(2);
          console.log(doctor);
          await doctor.methods.addPatientRecord(
            description,
            hash,
            this.state.pCAddr
          ).send({
            from:this.state.account
        })
        console.log(3);
         }
        catch (error) {
            this.setState({errorMessage: error.message, hidden:false});            
        }
       
         this.setState({
            disease: '',
           remark:'',
           selectedFile: null,
           condition:'',
           bp:'',
           nextdate:'',
           loading:false
         });
      }
    
      isFormValid = () => {
        const {
            remark,
            selectedFile,
         } =  this.state
      
         console.log("in button");
        return remark && selectedFile
       }  

       isSearchValid = () => {
        const {
          value
         } =  this.state
      
        return value
       }
      

    render() {
      
        let viewCond;
        if(this.state.count !== 0){
            viewCond = this.viewHtml()
        }
        return (
            <div>
            <div className="add-patient-main">

                <Container fluid>
                    <Row>
                        <Col sm={4}><img src={hospital} class="img-fluid" alt="contact-img"/> </Col>
                        <Col className="py-5 mt-5">
                            <h1 className="greet" style={{color: 'white', fontSize: '50px'}}>Welcome, hope you are good !!!</h1>
                            <InputGroup>
                            <FormControl
                            className="mb-5"
                            placeholder="Enter Blockchain address"
                            aria-label="city name"
                            value = {this.state.value}
                            onChange = {this.handleChangeSearch}
                            />
                            </InputGroup>
                            <Button color='yellow' onClick={this.handleSubmitSearch} loading ={this.state.sloading} disabled={!this.isSearchValid()}>Search</Button>
                            
                        </Col>
                    </Row>
                </Container>
               
                
            </div>

                {viewCond}

            </div>

        )
    }
}


export default AddPatientData;