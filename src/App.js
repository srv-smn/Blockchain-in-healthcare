import Login from './utils/Containers/Login/Login'
import Footer from './utils/Components/Footer/Footer'
import Header from './utils/Components/Header/Header';
import CardExampleFluid from './utils/Containers/UserReg/UserReg';
import {Route} from 'react-router-dom'
import './App.css';
import SearchDoc from './utils/Containers/SearchDoc/SearchDoc';
import SearchPatient from './utils/Containers/SearchPatient/SearchPatient';
import AddPatientData from './utils/Containers/AddPatientData/AddPatientData';
import History from './utils/Containers/History/history';
import DoctorRegisteration from './utils/Containers/DoctorRegisteration/DoctorRegisteration';
import PatientRegisteration from './utils/Containers/PatientRegisteration/PatientRegisteration';
import ViewData from './utils/Containers/ViewData/ViewData';
import AccesstoDoctor from './utils/Containers/PatientSide/AccesstoDoctor/AccesstoDoctor';
import FullDetail from './utils/Containers/PatientSide/PatientFullDetail/FullDetail';

function App() {
  return (
    <div className="App">
    <searchDoc />
    <Header />
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


    
    <Footer />
    </div>
    
  );
}

export default App;
