import React, { Component } from 'react'
import { FaUserMd,FaAddressCard,FaNotesMedical, FaUsers } from 'react-icons/fa'
import './history.css'
import {Link} from 'react-router-dom'
import web3 from '../../../ethereum/web3'
import {connectToPatients,
    connectToDoctor,
    addToDoctor,
    doctorDetails,
  } from '../../Eth/Ethutil' ;
  import Admin from '../../../ethereum/Admin'


class History extends Component {
    state = {
        name:'',
        mno:'',
        id:'',
        len:0,
        record:[],
        finalObj:[],
        account:''
    }
    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        const dExist = await Admin.methods.existD(accounts[0]).call()
        if(!dExist){
        alert("Doctor does not exist on this address");
        }else{
        const dAddr = await addToDoctor(accounts[0]);
        const {nme,mno,id,len} =  await doctorDetails(dAddr)
        let record = []
        const doctor = await connectToDoctor(dAddr) 
        this.setState({account:accounts[0]})


        for(let i=0;i<len;i++){
            let temp = await doctor.methods.pRecord(i).call()
           let obj = {
               date:temp[0],
               details:temp[2],
               hash:temp[3],
               patient:temp[1]
           }
           record.push(obj)
           //console.log(obj);
        }
        console.log(record);
        this.setState({
            name:nme,
            mno,
            id,
            len,
            record
        })

        for(let i=0; i < this.state.record.length; i++){
            console.log(1);
            const patient = await connectToPatients(this.state.record[i].patient);
            console.log(2);
            const pId = await patient.methods.owner().call();
            console.log(3);
            const pName = await patient.methods.name().call();
            console.log(4);
            const date = this.uToTime(this.state.record[i].date)
            console.log(5);
            const obj = {
                pName,
                pId,
                date,
                patient:this.state.record[i].patient,
                details:this.state.record[i].details,
                hash:this.state.record[i].hash,
            }
            console.log(6);
            const temp = [...this.state.finalObj, obj]
            console.log(7);
            this.setState({
                finalObj:temp
            })
        }
        console.log(8);
        console.log(this.state.finalObj);
    }
    }

   uToTime(t){
    const milliseconds = t * 1000 
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString()
       const arr = humanDateFormat.split(',')
       return arr[0]
   }
   

    render() {
        return (
            <div className="history-main">
            <h1 className="greet-doc">Welcome back !!!</h1>
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
                            <h4>Total Patient : {this.state.len}</h4></div>
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
                           {
                                this.state.finalObj.reverse().map((rec, index) =>{
                                  return(
                                 <tr>
                                 <td>{rec.pId}</td>
                                 <td>{rec.pName}</td>
                                 <td>{rec.date}</td>
                                 <td>{rec.details}</td>
                                 <td>
                                     <Link to={
                                                    { 
                                                        pathname: "/viewdata",
                                                        myCustomProps: {...rec, dAddr:this.state.account}
                                                    }
                                                }>
                                     <input type="submit" value='View' className="btn-history"/>
                                     </Link>
                                 </td>
                                 </tr>
                                )
                            })

                           }
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