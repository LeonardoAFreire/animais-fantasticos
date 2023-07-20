export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch('https://blockchain.info/ticker');
      const bitcoinJson = await bitcoinResponse.json();

      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (50 / bitcoinJson.BRL.sell).toFixed(6);
    } catch (e) {
      console.log(Error(e));
    }
  }

  fetchBitcoin();
}
