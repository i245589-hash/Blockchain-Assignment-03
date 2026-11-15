# OnChain Study Notes

## MG3012 — Blockchain Technology for Business
**Assignment 3: Building and Deploying Smart Contracts Using Truffle & Ganache**

## 1. Project Overview

OnChain Study Notes is a decentralized application (dApp) that allows users to save, view, and clear study notes using an Ethereum smart contract.

The project demonstrates how Solidity smart contracts can be deployed to a local blockchain using Truffle and Ganache and accessed through a web-based frontend.

## 2. Technologies Used

- Solidity 0.8.24
- Truffle v5.11.5
- Ganache v7.9.1
- Node.js v20.20.2
- HTML, CSS, and JavaScript
- Ethers.js
- Visual Studio Code

## 3. Project Structure

```text
blockchainassign03/
├── contracts/
│   └── smartcont.sol
├── migrations/
│   └── 1_deploycont01.js
├── frontend/
│   ├── index.html
│   └── script.js
├── truffle-config.js
├── README.md
└── screenshots/
```

## 4. Smart Contract Features

The OnChainStudyNotes smart contract provides three main functions:

- `setMessage()` — Saves a study note to the blockchain.
- `getMyMessage()` — Retrieves the user's saved note.
- `clearMyMessage()` — Clears the user's saved note.

## 5. Installation and Setup

Install Node.js, Truffle, and Ganache.

Open the project folder in Visual Studio Code.

Initialize a Truffle project if starting from scratch:

```bash
truffle init
```

Configure `truffle-config.js` to connect to Ganache.

The project uses Solidity 0.8.24 with the Paris EVM configuration for compatibility.

## 6. Compile the Smart Contract

Run:

```bash
truffle compile --all
```

This compiles the Solidity smart contract and generates the contract ABI.

## 7. Deploy the Smart Contract

Start Ganache and run:

```bash
truffle migrate --reset --network development
```

The contract is deployed to the local Ganache blockchain.

## 8. Run the Frontend

Start a local web server from the project root:

```bash
npx http-server . -p 8080 --cors
```

Open the frontend in a browser at the local server's `/frontend/` path.

The frontend uses Ethers.js to interact directly with the local Ganache blockchain.

## 9. Testing

The application can be tested by:

1. Starting Ganache.
2. Opening the frontend.
3. Clicking Connect Wallet to connect to the local Ganache account.
4. Entering a study note and clicking Save Note.
5. Clicking View Note to retrieve the saved message.
6. Clicking Clear Note to clear the saved message.
7. Verifying transactions in Ganache.

## 10. Deployment Details

**Network:** Ganache Development

**Network ID:** 5777

**Initial deployed contract address:**

`0xaBB6163f2987DC82ddeF425f02fd5AB87DC78D93`

The contract address may change after redeployment.

## 11. Screenshots

The screenshots folder contains evidence of:

- Successful smart contract compilation.
- Successful deployment.
- Saving and viewing study notes.
- Ganache blockchain transactions.

## 12. Conclusion

This project demonstrates the deployment and interaction of an Ethereum smart contract using Truffle, Ganache, Solidity, and Ethers.js.

It provides practical experience in blockchain development, smart contract deployment, and frontend integration.