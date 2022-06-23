import React from "react";
import { useEthers } from "@usedapp/core";

const wallet = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()

  return (
    <div>
      <h3> dApp Wallet</h3>
      {account ? (
        <p>Your account: {account}</p>
      ) : 
        <p>
          Connect Wallet.
          <br></br>
          <button onClick={()=>activateBrowserWallet()}>Connect Wallet</button>
        </p>
      }
    </div>
  );
};

export default wallet;
