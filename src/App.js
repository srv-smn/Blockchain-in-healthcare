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

    <Footer />
    <br />
    <SearchDoc />
    <br />
    <SearchPatient />
    <br />
    <AddPatientData />
    <br />
    <History />
    </div>
    
  );
}

export default App;
