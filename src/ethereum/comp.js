const path = require('path');
const fs = require('fs');
const solc = require('solc');



function compileContract() {
    let voterSOl = fs.readFileSync('./contracts/demo.sol' , 'utf8')
    let complierInput = {
        language: 'Solidity',
        sources:
        {
            'voter.sol': 
            {
                content: voterSOl
            }
        },
        settings:
        {
            optimizer:
            {
                enabled: true
            },
            outputSelection:
            {
                '*':{
                    '*':['*']
                }
            }
        }
    };
    console.log('compiling contract');
    let compiledContract = JSON.parse(solc.compile(JSON.stringify(complierInput)));
    console.log('Contract Compiled');
    for (let contractName in compiledContract.contracts['voter.sol']) {
        console.log(contractName , compiledContract.contracts['voter.sol'][contractName].abi);      
        let abi = compiledContract.contracts['voter.sol'][contractName].abi;
        fs.writeFileSync(`./contracts/bin/${contractName}_abi.json` , JSON.stringify(abi));
        return compiledContract.contracts['voter.sol'][contractName];
    }
}

compileContract();

