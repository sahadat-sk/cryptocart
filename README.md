
# CryptoCart

**CryptoCart** is an innovative e-commerce platform built with Next.js and deployed on the Hardhat test network. This decentralised application (dApp) allows administrators to add products for sale, and users can purchase them using Eth, the native cryptocurrency of the Ethereum network.

## Features

- **Admin Panel**: Admins can easily add and manage products.
- **Decentralized Payments**: Users can buy products using Eth.
- **Fast and Secure**: Leveraging the Avalanche blockchain for high-speed transactions and security.
- **Modern UI**: Built with Next.js, Shadcn/ui, and Tailwind CSS for a seamless user experience.

## Tech Stack

- **Frontend**: Next.js, Shadcn, Tailwind CSS
- **Blockchain**: Ethereum
- **Cryptocurrency**: Eth

## Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- Node.js and npm installed
- MetaMask extension installed in your browser
- Hardhat network configured in MetaMask

### Installation

#### Clone the repository

```bash
git clone https://github.com/<yourusername>/cryptocart.git
cd cryptocart
``` 
 
#### install dependencies  
```bash
yarn
```

#### Run hardhat network locally
```bash
cd ./packages/contracts
yarn start
```
#### Deploy the contract on hardhat
```bash
cd ./packages/contracts
yarn deploy
```

#### Run the development server
```bash
cd ./packages/app
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Admin**: 
   - Navigate to the admin panel.
   - Add new products by filling out the required fields such as product name, price, description and image.

2. **User**:
   - Browse products listed on the site.
   - Click on buy product and proceed to checkout.
   - Complete the purchase using Eth.


## Contact

For any questions or feedback, please reach out to us at [rentu1970@gmail.com](mailto:rentu1970@gmail.com).

---

Happy Shopping on CryptoCart!
