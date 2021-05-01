import React, { Component } from 'react'
import { FaUserMd,FaAddressCard,FaNotesMedical, FaUsers } from 'react-icons/fa'
import './history.css'
import {Link} from 'react-router-dom'
import web3 from '../../../ethereum/web3'
import {connectToPatients,
    connectToDoctor,
    addToPatients,
    addToDoctor,
    doctorDetails,
    patientDetails
  } from '../../Eth/Ethutil' ;
  import Admin from '../../../ethereum/Admin'


class History extends Component {
    state = {
        name:'',
        mno:'',
        id:''
    }
    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        const dExist = await Admin.methods.existD(accounts[0]).call()
        if(!dExist)
        alert("Doctor does not exist on this address");
        const dAddr = await addToDoctor(accounts[0]);
        const {nme,mno,id} =  await doctorDetails(dAddr)
        this.setState({
            name:nme,
            mno,
            id
        })
    }

    render() {
        return (
            <div className="history-main">
            <h1 className="greet-doc">Welcome back srv smn !!!</h1>
            <div class="ui cards">
              <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-1"><FaUserMd size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h2>{this.state.name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h4>{this.state.mno}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                            <h4>ID: {this.state.id}</h4></div>
                        </div>
                    </div>
                </div>

                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-4"><FaUsers size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                            <h4>Total Patient : 5</h4></div>
                        </div>
                    </div>
                </div>
            </div> 


                <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h2 className="card-title">
                        <span>
                        <h1>History</h1>
                        </span>
                    </h2>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <thead>
                            <tr>
                            <th> User ID </th>
                            <th> Name </th>
                            <th> Date</th>
                            <th> Details</th>
                            <th>  View </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>12345</td>
                            <td>Kasturi Anjankar</td>
                            <td>12/4/2021</td>
                            <td>detail.....</td>
                            <td>
                                <Link to='/viewdata'>
                                <input type="submit" value='View' className="btn-history"/>
                                </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>67678</td>
                            <td> Bhavna Agrawal</td>
                            <td>17/4/2021</td>
                            <td>detail.....</td>
                            <td>
                                <input type="submit" value='View' className="btn-history"/>
                            </td>
                            </tr>
                            <tr>
                            <td>56565</td>
                            <td>Asra Gazi</td>
                            <td>22/4/2021</td>
                            <td>detail.....</td>
                            <td>
                                <input type="submit" value='View' className="btn-history"/>
                            </td>
                            </tr>


                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default History;