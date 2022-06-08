import './App.css';
import { useState } from 'react';
import Web3 from 'web3';


function App() {

  const [name, setName] = useState('myName');

  return (
    <div className="App">
      <header className="App-header">
        Smart Ballot ({name})
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
