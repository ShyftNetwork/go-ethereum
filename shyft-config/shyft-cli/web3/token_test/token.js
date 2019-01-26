var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
var abi = require("./abi");

// Deploy
var initialSupply = 500000000000000;
var mytokenContract = web3.eth.contract(abi);

console.log(web3.eth.accounts[0])
var mytoken = mytokenContract.new(
    initialSupply,
    {
        from: web3.eth.accounts[0],
        data: '0x6060604052341561000f57600080fd5b61095b8061001e6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461007d57806318160ddd146100d757806323b872dd1461010057806370a0823114610179578063a9059cbb146101c6578063dd62ed3e14610220575b600080fd5b341561008857600080fd5b6100bd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061028c565b604051808215151515815260200191505060405180910390f35b34156100e257600080fd5b6100ea61037e565b6040518082815260200191505060405180910390f35b341561010b57600080fd5b61015f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610384565b604051808215151515815260200191505060405180910390f35b341561018457600080fd5b6101b0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061067b565b6040518082815260200191505060405180910390f35b34156101d157600080fd5b610206600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106c4565b604051808215151515815260200191505060405180910390f35b341561022b57600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108a8565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610451575081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156104dc5750600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b15156104e757600080fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156107945750600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b151561079f57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a7230582026412eee7bb184c9b654d6cc6205dec9291f3eec08c302e59ac27606590ec28f0029',
        gas: '4700000',
    }, function (e, contract){
        console.log('e', e);
        // console.log('contract', contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            var a = mytokenContract.at(contract.address);
            a.transfer.sendTransaction(web3.eth.accounts[0], 500000, {from: web3.eth.accounts[0]}, function (err, res) {
                if (err) console.log("err", err);
                console.log("transfer success:", res)
            })
            a.transfer.sendTransaction(web3.eth.accounts[1], 500000, {from: web3.eth.accounts[0]}, function (err, res) {
                if (err) console.log("err", err);
                console.log("transfer success:", res)
            })
            console.log(a.balanceOf.call(web3.eth.accounts[0]).toString())
            console.log(a.balanceOf.call(web3.eth.accounts[1]).toString())
        }
    });




