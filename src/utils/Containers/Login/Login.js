import React,{Component} from 'react';
import {Link} from 'react-router-dom'

import Classes from './Login.module.css'
import Doctor from './../../../assets/doctor.png'
import Patient from './../../../assets/patient.png'
import Admin from './../../../assets/admin.png'
import Back from './../../../assets/background.jpg'

class Login extends Component {
  render() {
    return(
      <div className={Classes.center} style={{ backgroundImage: `url(${Back})` }}>
        <form>

        <button>
      <div className={Classes.container}>
        <img src={Doctor} alt="Doctor" className={Classes.image} />
        <div className={Classes.overlay}>
          <div className={Classes.text}>Doctor</div>
        </div>
      </div>
      </button>

      <button>
      <div className={Classes.container}>
        <img src={Patient} alt="Patient" className={Classes.image} />
        <div className={Classes.overlay}>
          <div className={Classes.text}>Patient</div>
        </div>
      </div>
      </button>

      <button>
      <div className={Classes.container}>
        <img src={Admin} alt="Admin" className={Classes.image} />
        <div className={Classes.overlay}>
          <Link to="newform">
            <div className={Classes.text}>Admin</div>
          </Link>  
        </div>
      </div>
      </button>
      </form>
      </div>
    )
    
  }
}

export default Login
