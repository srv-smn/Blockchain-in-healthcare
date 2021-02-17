import Web3 from 'web3';

let web3 ;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
// we are in browser and running metamask
 web3 = new Web3(window.web3.currentProvider);
//ethereum.enable();
  }
  else
{
  // we are on server or meta mask is not installed
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/1ec6558c6dba4a9db1ab5f5b647d9a60'
  );
  web3 = new Web3(provider);
}

export default web3 ;
