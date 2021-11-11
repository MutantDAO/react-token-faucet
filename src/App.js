import './App.css';
import FCTToken from './artifacts/contracts/FISHToken.sol/FISHToken.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Faucet from './components/Faucet.js';
import TokenSend from './components/TokenSend.js';
import Header from "./components/Header";

function App() {
  
  const Token = FCTToken;
  
  return (
    <div className="App">
      <Header/>
      <Container>
        <Row className="justify-content-md-center">
          <Col style={{display: 'flex'}} className="justify-content-md-center">
            <Faucet  tokenContract={Token}/>
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