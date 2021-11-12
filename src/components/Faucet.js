import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Message from './Message';
import './Faucet.css';

// const tokenAddress = "0xbCc10bC2a24b07b598D7794FecFDb42B48a5c435"


// const Faucet = (props) => {
const Faucet = (props) => {
	
	const [balance, setBalance] = useState();
	const [showBalance, setShowBalance] = useState(false);
	const {tokenAddress, network } = props;
	
	useEffect(() => {
		getBalance();
	});
	
	async function getBalance() {
		if (typeof window.ethereum !== 'undefined') {
			const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			console.info(`provider`, provider);
			const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, provider)
			console.info(`contract`, contract);
			const balance = await contract.balanceOf(account);
			console.log("Balance: ", balance.toString());
			setBalance(ethers.utils.formatEther(balance.toString()));
			setShowBalance(true);
		}
	}
	
	async function faucet() {
		if (typeof window.ethereum !== 'undefined') {
			const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, signer);
			
			const exp = ethers.BigNumber.from("10").pow(18);
			const amount = ethers.BigNumber.from("50").mul(exp);
			// contract.faucet(account[0], 1000000000000000000);//100 tokens
			contract.faucet(account[0], amount);//100 tokens
		}
	}
	console.info(`network name`, network);
	return (
		<div style={{maxWidth:'600px'}}>
			<Card style={{background: "rgb(209, 213, 219)", padding: '30px', marginBottom: "20px"}}>
				<Card.Body>
					<Card.Title style={{fontWeight: 600,fontSize:'1.5em'}}><b>({network} Testnet)</b> $FISH balance</Card.Title>
					<Card.Subtitle style={{margin: "30px 0px", lineHeight: 1.5}}>Sup Mutant Dev!  Thanks for taking time to develop for the Mutant Community.  Click below to check your <b>$FISH</b> for development on Ropsten Testnet.</Card.Subtitle>
					<div className="d-grid gap-2">
						<div style={{marginTop:"15px"}}>
							{ showBalance ? <Message balance={balance}/> : null }
						</div>
						<Button onClick={getBalance} variant="warning faucet-btn">Check $FISH Balance</Button>
					</div>
				</Card.Body>
			</Card>
			<Card style={{background: "rgb(209, 213, 219)", padding: '30px'}}>
				<Card.Body>
					<Card.Title style={{fontWeight: 600,fontSize:'1.5em'}}>Make it rain <b>(Testnet)</b> $FISH</Card.Title>
					<Card.Subtitle style={{margin: "30px 0px", lineHeight: 1.5}}>Click below to receive your <b>$FISH</b> for development on <b>Ropsten Testnet</b>.</Card.Subtitle>
					<div className="d-grid gap-2" style={{marginBottom:"15px"}}>
						<Button onClick={faucet} variant={"primary faucet-btn"}>Make it 💦  $FISH!</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Faucet