import React, { Component } from 'react'
import {FaAddressCard,FaUserMd,FaNotesMedical, FaSearchPlus, FaKey} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import {Form} from 'react-bootstrap'
import {Button, Message} from 'semantic-ui-react'
import './accesstodoctor.css'
import web3 from '../../../../ethereum/web3'
import Admin from '../../../../ethereum/Admin'
import {connectToPatients,
    addToPatients,
    addToDoctor,
    doctorDetails,
    rwAccess
  } from '../../../Eth/Ethutil' ;

class AccesstoDoctor extends Component {
    constructor(props){
        super(props);
        
        this.state = {value: '',
                    errorMessage:'',
                    hidden: true,
                    avloading: false,
                    awloading: false,
                    rvloading: false,
                    rwloading: false,
                    loading:false,
                    account:'',
                    count:0,
                    dName:'',
                    dId:'',
                    dMNO:'',
                    r : <ImCross />,
                     rw : <ImCross />,
                     disabled:true
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleSubmitView = this.handleSubmitView.bind(this);
        this.handleSubmitWrite = this.handleSubmitWrite.bind(this);
        this.handleSubmitRemoveView = this.handleSubmitRemoveView.bind(this);
        this.handleSubmitRemoveWrite = this.handleSubmitRemoveWrite.bind(this);
    }
    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        const pExist = await Admin.methods.existP(accounts[0]).call()
        if(!pExist)
        alert("Patients does not exist on this address");
        this.setState({
          account:accounts[0]
        })
    }
    async handleSubmitRemoveView(event){
        this.setState({rvloading:true})
        event.preventDefault();
        try{
        const pAddr = await addToPatients(this.state.account)
        const patient = await connectToPatients(pAddr)
        await patient.methods.removeViewer(this.state.value).send({
            from:this.state.account
        })
        }catch(error){
            this.setState({errorMessage: error.message, hidden:false});
        }
        this.setState({rvloading:false})

    }

    async handleSubmitRemoveWrite(event){
        this.setState({rwloading:true})
        event.preventDefault();
        try{
        const pAddr = await addToPatients(this.state.account)
        const patient = await connectToPatients(pAddr)
       const dAddr = await addToDoctor(this.state.value)
        await patient.methods.removeEditor(dAddr).send({
            from:this.state.account
        })
    }catch(error){
        this.setState({errorMessage: error.message, hidden:false});
    }
        this.setState({rwloading:false})
    }
    async handleSubmitSearch(event) {
        this.setState({loading:true})
        event.preventDefault();
        let dExist = false;
       
        if(web3.utils.checkAddressChecksum(this.state.value)){
          dExist = await Admin.methods.existD(this.state.value).call()
        }

        if(!dExist)
        {
          alert("Doctor does not exist on this address");
        }else{
            const dAddr = await addToDoctor(this.state.value)
            const {nme,mno,id} =  await doctorDetails(dAddr)
            let{read,write} =  await rwAccess(this.state.account, this.state.value)
            let r = read
            let rw = write
            if(r===true){
                this.setState({r: <TiTick size="2em"/>})
            }
            if(rw===true){
                this.setState({rw: <TiTick size="2em"/>})
            }
            this.setState({
              dName:nme,
              dId:id,
              dMNO:mno,
              count:1,
              disabled:false
            })
          }
        
        this.setState({loading:false})
    }

    async handleSubmitView(event) {
        this.setState({avloading:true})
        event.preventDefault();
        try{
        const pExist = await Admin.methods.existP(this.state.account).call()
        if(!pExist)
        {
          alert("You are not a Patient , Unable to call method");
        } else{

        const pAddr = await addToPatients(this.state.account)
        const patient = await connectToPatients(pAddr)

        let dExist = false
        if(web3.utils.checkAddressChecksum(this.state.value)){
            dExist = await Admin.methods.existD(this.state.value).call()
          }
        
        if(dExist){
            await patient.methods.addViewer(this.state.value).send({
                from:this.state.account
            })
        } else{
            alert("Doctor does not exist on this address");
        }
    }
    }catch(error){
        this.setState({errorMessage: error.message, hidden:false});
    }
    this.setState({avloading:false})


    }

    async handleSubmitWrite(event) {
        this.setState({awloading:true})
        event.preventDefault();
        try{
        const pExist = await Admin.methods.existP(this.state.account).call()
        if(!pExist)
        {
          alert("You are not a Patient , Unable to call method");
        } else{

        const pAddr = await addToPatients(this.state.account)
        const patient = await connectToPatients(pAddr)

        let dExist = false
        let dAddr
        if(web3.utils.checkAddressChecksum(this.state.value)){
            dExist = await Admin.methods.existD(this.state.value).call()
             dAddr = await addToDoctor(this.state.value)
          }
        
        if(dExist){
            await patient.methods.addEditor(dAddr).send({
                from:this.state.account
            })
        } else{
            alert("Doctor does not exist on this address");
        }
    }
    }catch(error){
        this.setState({errorMessage: error.message, hidden:false});
    }
    this.setState({awloading:false})
    }


        handleChange=(e)=>{
            this.setState({value : e.target.value})
            console.log(this.state)
        }
    readHTM(){
        return(
            <div class="ui cards">
            <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-1"><FaUserMd size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h2>{this.state.dName}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                            <h4>Contact : {this.state.dMNO}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                            <h4>ID : {this.state.dId}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card doc-card">
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
        )
    }

    isSearchValid = () => {
        const {
          value
         } =  this.state
      
        return value
       }

    render() {
        let htm = null
        if(this.state.count !== 0){
            htm = this.readHTM()
        }
        return (
            <div className="access-to-doctor-main">
               {htm}

                <div className="access-to-doctor">
                <div className="container">
                <Form>
                    <Form.Group >
                        <Form.Label>Blockchain Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Blockchain Address"
                            value = {this.state.value}
                            onChange = {this.handleChange} />
                    </Form.Group>
                </Form>  
                <div style={{textAlign:"center"}}>
                <Button primary className="py-3 btns" onClick={this.handleSubmitSearch} disabled={!this.isSearchValid()} loading ={this.state.loading}> Search <FaSearchPlus color = "white"/> </Button>
                <Button color='green' className="mb-2 py-3 btns" onClick={this.handleSubmitView} disabled={this.state.disabled} loading ={this.state.avloading}>Add View</Button>
                <Button color='green' className="mb-2 py-3 btns" onClick={this.handleSubmitWrite} disabled={this.state.disabled} loading ={this.state.awloading}> Add Write</Button>  
                <Button color='red' className="mb-2 py-3 btns" onClick={this.handleSubmitRemoveView} disabled={this.state.disabled} loading ={this.state.rvloading}>Remove View</Button>
                <Button color='red' className="mb-2 py-3 btns" onClick={this.handleSubmitRemoveWrite} disabled={this.state.disabled} loading ={this.state.rwloading}>Remove Write</Button>
                </div>
                </div> 
                </div> 
                <Message error header="Oops!" content={this.state.errorMessage} hidden = {this.state.hidden}  negetive compact/>

                </div>
        )
    }
}


export default AccesstoDoctor;