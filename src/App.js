import "./App.css";
import { DAppProvider } from "@usedapp/core";

import Wallet from "./components/wallet";

function App() {
  return (
    <DAppProvider>
      <div className="App">
        <header className="App-header">
          <Wallet />
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
