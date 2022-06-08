import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';


function App() {

  const [account, setAccount] = useState();


  useEffect(() => {
    async function loadAccounts(){
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
    }
  },[])


  return (
    <div className="App">
      <header className="App-header">
        Smart Ballot 
      </header>
      <p>
        your account: {account}
      </p>
    </div>
  );
}

export default App;
