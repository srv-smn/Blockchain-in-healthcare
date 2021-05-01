import web3 from './web3';
import admin from '../abis/Admin.json';

const Admin= new web3.eth.Contract(
  admin.abi,
  admin.networks[4].address
);

export default Admin ;