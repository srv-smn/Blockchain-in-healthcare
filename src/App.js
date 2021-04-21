import './App.css';
import Login from './utils/Containers/Login/Login'
import Footer from './utils/Components/Footer/Footer'
import Header from './utils/Components/Header/Header';
import LoginPage from './utils/Containers/LoginPage/UserReg';
import FormExampleFieldControlId from './utils/Containers/LoginPage/UserReg';
import {Route} from 'react-router-dom'
import NavBar from './utils/Components/NavBar/Navbar';


function App() {
  return (
    <div className="App">
    <Header />
    <NavBar />
    <Route path="/" exact component={Login} />
    <Route path="/newform" component={FormExampleFieldControlId} />
    <Route path="/home" component={Login} />
    <Footer />
    </div>
  );
}

export default App;
