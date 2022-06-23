import "./App.css";
import { DAppProvider, Rinkeby, Kovan, Mainnet } from "@usedapp/core";
import {getDefaultProvider} from "ethers"

import Wallet from "./components/wallet";

function App() {

const config ={
  network: [Rinkeby],
  readOnlyChainId:Rinkeby.chainId,
  readonlyUrls:{
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Kovan.chainId]: "https://kovan.infura.io/v3/4da288c10457420b8e3c4c87f3af8cec",
    [Rinkeby.chainId]:"https://rinkeby.infura.io/v3/4da288c10457420b8e3c4c87f3af8cec"
  
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
