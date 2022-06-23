import "./App.css";
import { DAppProvider, Rinkeby, Kovan, Mainnet } from "@usedapp/core";
import {getDefaultProvider} from "ethers"

import Wallet from "./components/wallet";

function App() {

const config ={
  network: [Rinkeby],
  readOnlyChainId:Rinkeby.chainId,
  readonlyUrls:{
    [Rinkeby.chainId]: getDefaultProvider('mainnet')
    [Kovan.chainId]: ""
    [Mainnet.chainId]:""
  
  },
  notification:{
    expiratonPeriod: 1000,
    checkInterval: 1000
  }
}

  return (
    <DAppProvider config={config}>
      <div className="App">
        <header className="App-header">
          <Wallet />
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
