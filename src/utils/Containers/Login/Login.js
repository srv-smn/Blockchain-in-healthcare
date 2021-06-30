import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Classes from './Login.module.css'
import Doctor from './../../../assets/doctor.png'
import Patient from './../../../assets/patient.png'
import Admin from './../../../assets/admin.png'
import Back from './../../../assets/w5.jpg'
import { Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div className={Classes.center} style={{ backgroundImage: `url(${Back})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <form>

          <Container>
            <Row>
              <Col xs={12} md={4}>
                <Link to='/doctorhistory'>
                  <button style={{borderRadius:'15px', boxShadow:'0px 5px 25px 0px rgb(0 0 0 / 20%)'}}>
                    <div className={Classes.container}>
                      <img src={Doctor} alt="Doctor" className={Classes.image} />
                      <div className={Classes.overlay}>
                        <div className={Classes.text}>Doctor</div>
                      </div>
                    </div>
                  </button>
                </Link>
              </Col>
              <Col xs={12} md={4}>
                <Link to='/full-details'>
                  <button style={{borderRadius:'15px'}}>
                    <div className={Classes.container}>
                      <img src={Patient} alt="Patient" className={Classes.image} />
                      <div className={Classes.overlay}>
                        <div className={Classes.text}>Patient</div>
                      </div>
                    </div>
                  </button>
                </Link>
              </Col>
              <Col xs={12} md={4}>
                <Link to="newform">
                  <button style={{borderRadius:'15px'}}>
                    <div className={Classes.container}>
                      <img src={Admin} alt="Admin" className={Classes.image} />
                      <div className={Classes.overlay}>
                        <div className={Classes.text}>Admin</div>
                      </div>
                    </div>
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>

        </form>

      </div>
    )

  }
}

export default Login
