export default () => ({
  NetworkBaseUrl: {
    SEPOLIA: {
      infura: ` https://sepolia.infura.io/v3/${process.env.InfuraApiKeyToken}`,
      etherscan: `https://api-sepolia.etherscan.io/api?apikey=${process.env.EtherscanApiKeyToken}&module=account&action=txlist&startblock=0&endblock=99999999&sort=desc
      `,
    },
  },
});
