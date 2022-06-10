import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [network, setNetwork] = useState();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

  useEffect(() => {
    loadAccounts();
  });

  useEffect(() => {
    loadBalance();
  }, [account]);

  async function loadAccounts() {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }

  async function loadBalance() {
    const network = await web3.eth.getNetworkType();
    const balance = await web3.eth.getBalance(account);

    setBalance(balance);
    setNetwork(network);
  };

  return (
    <div className="App">
      <header className="App-header">Smart Ballot</header>
      <p>your account: {account}</p>
      <p>your network: {network}</p>
      <p>your balance: {balance}</p>
    </div>
  );
}

export default App;
