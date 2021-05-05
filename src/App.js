import Login from './utils/Containers/Login/Login'
import React from 'react'
import Footer from './utils/Components/Footer/Footer'
import Header from './utils/Components/Header/Header';
import CardExampleFluid from './utils/Containers/UserReg/UserReg';
import {Route} from 'react-router-dom'
import './App.css';
import AddPatientData from './utils/Containers/AddPatientData/AddPatientData';
import History from './utils/Containers/History/history';
import DoctorRegisteration from './utils/Containers/DoctorRegisteration/DoctorRegisteration';
import PatientRegisteration from './utils/Containers/PatientRegisteration/PatientRegisteration';
import ViewData from './utils/Containers/ViewData/ViewData';
import AccesstoDoctor from './utils/Containers/PatientSide/AccesstoDoctor/AccesstoDoctor';
import FullDetail from './utils/Containers/PatientSide/PatientFullDetail/FullDetail';
import viewToDoctor from './utils/Containers/viewToDoctor/viewToDoctor'

import HeaderA from './utils/Components/Header/HeaderAdmin'
import HeaderD from './utils/Components/Header/HeaderDoctor'
import HeaderP from './utils/Components/Header/HeaderPatients'
import web3 from './ethereum/web3'
import Admin from './ethereum/Admin'





class App extends React.Component{
  state ={
    dExist:false,
    pExist:false,
    isOwner:false
  }

  async componentDidMount(){
    const accounts = await web3.eth.getAccounts();
    const dExist = await Admin.methods.existD(accounts[0]).call()
    const pExist = await Admin.methods.existP(accounts[0]).call()
    const isOwner = await Admin.methods.owner().call() === accounts[0]
    this.setState({
      dExist,
      pExist,
      isOwner
    })



  }
  render(){
     console.log(window.location.pathname);
    let sidebarComponent = <Header />
    if(this.state.isOwner && !(window.location.pathname === '/')){
      sidebarComponent = <HeaderA />
     } else if(this.state.pExist && !(window.location.pathname === '/')){
      sidebarComponent = <HeaderP />
     } else if(this.state.dExist && !(window.location.pathname === '/')){
      sidebarComponent = <HeaderD />
     }

  return (
    <div className="App">
    {sidebarComponent}
 
    <Route path="/" exact component={Login} />
    <Route path="/newform" component={CardExampleFluid} />
    <Route path="/home" component={Login} />
    <Route path="/doctorregisteration" component={DoctorRegisteration} />
    <Route path="/patientregisteration" component={PatientRegisteration} />
    <Route path="/addpatientdata" component={AddPatientData} />
    <Route path="/viewdata" component={ViewData} />
    <Route path="/accesstodoctor" component={AccesstoDoctor} />
    <Route path="/doctorhistory" component={History} />
    <Route path="/full-details" component={FullDetail} />    
    <Route path="/viewtodoctor" component={viewToDoctor} />    


    
    <Footer />
    </div>
    
  );
  }
}

export default App;
