export default function fetchBitcoin(url, target) {
  async function fetchData() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();

      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (50 / bitcoinJson.BRL.sell).toFixed(6);
    } catch (e) {
      console.log(Error(e));
    }
  }

  fetchData();
}
