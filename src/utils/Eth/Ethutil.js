import web3 from '../../ethereum/web3'
import Admin from '../../ethereum/Admin'
import Doctor from '../../abis/Doctor.json'
import Patients from '../../abis/Patient.json'

// create contract instance of patients
const connectToPatients = async (address) => {
    const patient = new web3.eth.Contract(Patients.abi, address);
      return patient
}

// create contract instance of doctor
const connectToDoctor = async (address) =>{
    const doctor = new web3.eth.Contract(Doctor.abi, address);
    return doctor
}

// get patients deployed address from their account address
const addToPatients = async (address) =>{
    const patients = await Admin.methods.patients(address).call();
    return patients 
}

// get doctor deployed address from their account address
const addToDoctor = async (address) =>{
    const doctor = await Admin.methods.doctors(address).call();
    return doctor 
}


const doctorDetails = async (address) =>{
    const doctor = await connectToDoctor(address);
    const nme = await doctor.methods.name().call();
    const mno = await doctor.methods.mno().call();
    const id = await doctor.methods.id().call();
    const len = await doctor.methods.recordLen().call();

    return {nme,mno,id,len} 
}


const patientDetails = async (address) =>{
    const patient = await connectToPatients(address);

    const nme = await patient.methods.name().call();
    const mno = await patient.methods.mno().call();
    const bg = await patient.methods.bg().call();

    return {nme,mno,bg} 
}

const rwAccess = async (addressP, addressD) =>{
    const pAddr = await addToPatients(addressP)
    const patient = await connectToPatients(pAddr);
    const read =  await patient.methods.viewers(addressD).call()
    const dAddr = await addToDoctor(addressD)
    const write =  await patient.methods.editors(dAddr).call()
    console.log('read','write',read,write)
    console.log('paadr',addressP);
    console.log('aDAddr',pAddr);
    console.log('POBJ',patient);
    
    return {read,write}
}



export {connectToPatients,
    connectToDoctor,
    addToPatients,
    addToDoctor,
    doctorDetails,
    patientDetails,
    rwAccess
}



