import web3 from './web3';
import Admin from '../../abis/Admin.json';

module.exports = new web3.eth.Contract(
  Admin.abi,
  Admin.networks[4].address
);