

const faucetAddress = "0xB3d225839dAD0567FF713dDBdcEc7bCB6C2536B0"

const ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "faucetToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.onload = async () => {
    const authereum = await new Authereum('mainnet')
    const provider = await authereum.getProvider()
    const web3 = await new Web3(provider) 
    const faucet = await new web3.eth.Contract(ABI , faucetAddress)
    const myaddress = await authereum.getAccountAddress()
    ans = prompt("get reiwatoken?")
    if (ans) {
        faucet.methods.faucetToken().send({from: myaddress})
    }
}
