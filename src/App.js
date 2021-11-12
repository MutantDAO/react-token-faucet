import './App.css';
import FCTToken from './artifacts/contracts/FISHToken.sol/FISHToken.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Faucet from './components/Faucet.js';
import TokenSend from './components/TokenSend.js';
import Header from "./components/Header";
import {ethers} from "ethers";
import {useEffect, useState} from 'react';

const supportedNetworks = {
  rinkeby: {
    token_contract_addres : "0x91e6f67d0853eF97BB4ab213bb55a10f615E98d2",
    name: "Rinkeby"
  },
  ropsten: {
    token_contract_addres : "0xbCc10bC2a24b07b598D7794FecFDb42B48a5c435",
    name: "Ropsten"
  }
}

function App() {
  
  const [network, setNetwork] = useState();
  const Token = FCTToken;
  
  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    let networkInfo = await provider.getNetwork();
    setNetwork(networkInfo);
    console.info(`network 1`, network);
  }, [])
  
  console.info(`network`, network);
  return (
    <div className="App">
      <Header/>
      <Container>
        <Row className="justify-content-md-center">
          <Col style={{display: 'flex'}} className="justify-content-md-center">
            {typeof network !== "undefined" ? <Faucet  tokenContract={Token} tokenAddress={supportedNetworks[network.name].token_contract_addres} network={supportedNetworks[network.name].name}/> : ''}
          </Col>
          {/*<Col>*/}
          {/*  <TokenSend tokenContract={Token}/>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </div>
  );
}

export default App;