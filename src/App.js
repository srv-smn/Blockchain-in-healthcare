import Login from './utils/Containers/Login/Login'
import Footer from './utils/Components/Footer/Footer'
import Header from './utils/Components/Header/Header';
import DoctorLogin from './utils/Containers/DoctorLogin/doctorlogin';
import PatientLogin from './utils/Containers/PatientLogin/patientlogin';
import CardExampleFluid from './utils/Containers/UserReg/UserReg';
import {Route} from 'react-router-dom'
import NavBar from './utils/Components/NavBar/Navbar';
import './App.css';
import SearchDoc from './utils/Containers/SearchDoc/SearchDoc';
import SearchPatient from './utils/Containers/SearchPatient/SearchPatient';

function App() {
  return (
    <div className="App">
    <searchDoc />
    <Header />
    <Route path="/" exact component={Login} />
    <Route path="/newform" component={CardExampleFluid} />
    <Route path="/home" component={Login} />
    <Route path="/doctorlogin" component={DoctorLogin} />
    <Route path="/patientlogin" component={PatientLogin} />

    <Footer />
    <br />
    <SearchDoc />
    <br />
    <SearchPatient />
    </div>
    
  );
}

export default App;
