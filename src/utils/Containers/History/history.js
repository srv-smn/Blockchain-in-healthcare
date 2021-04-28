import React, { Component } from 'react'
import { FaUserMd,FaAddressCard,FaNotesMedical } from 'react-icons/fa'
import './history.css'

class History extends Component {
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
                                <h2>Srv Smn</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-2"><FaAddressCard size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content">
                                <h4>0123456789<br />
                                XYZ colony, Malkapur</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card doc-card">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 doc-detail-3"><FaNotesMedical size='4em' color='white' className="faicons"/></div>
                            <div className="col-8 doc-card-content"><h4>
                                ID: 122334 <br />
                                Blood Group : A+</h4></div>
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
                                <input type="submit" value='View' className="btn-history"/>
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