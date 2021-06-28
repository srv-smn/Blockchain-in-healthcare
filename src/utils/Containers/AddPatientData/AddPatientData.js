import React, { Component } from 'react'
import { Form,TextArea, Message,Button } from 'semantic-ui-react'
import {FormControl,InputGroup} from 'react-bootstrap'
import { FaUser,FaAddressCard,FaNotesMedical, FaKey } from 'react-icons/fa'
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
          name:'',
          mno:'',
          bg:'',
          description: '',
          selectedFile: null,
          count:0,
          value:'',
          r : <ImCross />,
          rw : <ImCross />,
          account:'',
          disables:true,
          pCAddr:''
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleSubmitShow = this.handleSubmitShow.bind(this);
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
                              <h2>{this.state.name}</h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
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

              <div className="card">
                  <div className="container">
                      <div className="row">
                          <div className="col-4 detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                          <div className="col-8 card-content"><h4>Blood Group : {this.state.bg}</h4></div>
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
                            Write &nbsp; {this.state.rw}
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
                        <div style={{textAlign:"center"}}>
                        <Button type='submit' color='green' onClick={this.handleSubmit} disabled={!this.isFormValid()} loading ={this.state.loading}>Submit</Button>
                        &nbsp; &nbsp; &nbsp;
                        <Link to = {
                                                    { 
                                                        pathname: "/viewtodoctor",
                                                        myCustomProps: {value:this.state.value}
                                                    }
                                                }>
                    <Button primary onClick={this.handleSubmitShow} >Previos Record</Button>
                    
                    </Link>
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

        event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ selectedFile: Buffer(reader.result) })
      console.log('buffer', this.state.selectedFile)
    }
      };



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
    
      if(this.state.description==='' && this.state.selectedFile===null){
          alert("Please enter the File and Description")
      }
      // Details of the uploaded file
      console.log(this.state.selectedFile);
         console.log(this.state.description)

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
            this.state.description,
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
           description:'',
           selectedFile: null,
           loading:false
         });
      }
    
      isFormValid = () => {
        const {
            description,
            selectedFile,
         } =  this.state
      
         console.log("in button");
        return description && selectedFile
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
            <div className="add-patient-main">
            
                <h1 className="greet">Welcome, hope you are good !!!</h1>
                <InputGroup className="mb-4">
                    <FormControl
                    placeholder="Enter Blockchain address"
                    aria-label="city name"
                    value = {this.state.value}
                    onChange = {this.handleChangeSearch}
                />
                <InputGroup.Append>
                    <Button primary onClick={this.handleSubmitSearch} loading ={this.state.sloading}>Search</Button>
                </InputGroup.Append>
                </InputGroup>
                <br/>
                { viewCond }
                <Message error header="Oops!" content={this.state.errorMessage} hidden = {this.state.hidden}  negetive compact/>
            </div>

        )
    }
}


export default AddPatientData;