<div id = "tabcontainer" > <div class="tab">
  <button class="tablinks" onClick={(e) => showTab('Home')}>Home</button>
  <button class="tablinks" onClick={(e) => showTab('Send')}>Send</button>
  <button class="tablinks" onClick={(e) => showTab('Receive')}>Receive</button>
  <button class="tablinks" onClick={(e) => showTab('Transactions')}>Transactions</button>
</div>
<div id="Home" class="tabcontent outlined">
  <b>Ledger Device Info</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>{ledgerDeviceInfo}</code>
    <code>&nbsp;</code>
  </p>
  <b>Private Key</b>
  <p ="} style={{
      height: '12px'
    }}>
    <input ="}" style={{
        fontFamily: 'monospace'
      }} type="text" size="64" id="privateKey" placeholder="Private Key"></input>
  </p>
  <p>
    <button id="privateKeyButton" onClick={(e) => getPublicKeyFromPrivateKey()}>Use Private Key</button>
  </p>
</div>
<div id="Send" class="tabcontent outlined">
  <b>Send To Address</b>
  <p ="} style={{
      height: '12px'
    }}>
    <input ="}" style={{
        fontFamily: 'monospace'
      }} type="text" size="64" id="sendToAddress" placeholder="Send To Address"></input>
  </p>
  <b>Amount</b>
  <p ="} style={{
      height: '12px'
    }}>
    <input ="}" style={{
        fontFamily: 'monospace'
      }} type="text" size="64" id="sendAmount" placeholder="Send Amount"></input>
  </p>
  <p>
    <button onClick={(e) => sendAmountToAddress()}>Send Amount To Address</button>
  </p>
  <b>Send To Address Status</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <table>
      <tr>
        <th>Status</th>
      </tr>

      {
        sendToAddressStatuses.map((sendToAddressStatus, key) => {
          return (<tr>
            <td>{sendToAddressStatus}</td>
          </tr>)
        })
      }
    </table>
  </p>

</div>
<div id="Receive" class="tabcontent outlined">
  <b>Public Key</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>{publicKey}</code>
    <code>&nbsp;</code>
  </p>
  <b>Address</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>{address}</code>
    <code>&nbsp;</code>
  </p>
  <b>Balance Status</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>{balanceStatus}</code>
    <code>&nbsp;</code>
  </p>
  <b>Balance</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>{balance}</code>
    <code>&nbsp;</code>
  </p>
</div>
<div id="Transactions" class="tabcontent outlined">
  <b>Transaction History</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>Status:{transactionHistoryStatus}</code>
  </p>
  <table>
    <tr>
      <th>TX Number</th>
      <th>Value Type</th>
      <th>Address</th>
      <th>Value (ELA)</th>
      <th>Value (Sats)</th>
    </tr>
    {
      parsedTransactionHistory.map(function(item, key) {
        return (<tr>
          <td>{item.n}</td>
          <td>{item.type}</td>
          <td>{item.address}</td>
          <td>{item.value}</td>
          <td>{item.valueSat}</td>
        </tr>)
      })
    }
  </table>
  <b>Unspent Transaction Outputs</b>
  <p ="} style={{
      wordBreak: 'break-all'
    }}>
    <code>Status:{unspentTransactionOutputsStatus}</code>
  </p>
  <table>
    <tr>
      <th>utxoIx</th>
      <th>Txid</th>
      <th>Index</th>
      <th>Value (ELA)</th>
      <th>Value (Sats)</th>
    </tr>
    {
      parsedUnspentTransactionOutputs.map(function(item, key) {
        return (<tr>
          <td>{item.utxoIx}</td>
          <td class="break_all">{item.Txid}</td>
          <td>{item.Index}</td>
          <td>{item.Value}</td>
          <td>{item.valueSats.toString(10)}</td>
        </tr>)
      })
    }
  </table>
</div>
</div>