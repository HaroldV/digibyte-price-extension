function getDigibytePrice() {        
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=DGB&tsyms=USD,BTC')
    .then((res) => res.json())
    .then(function(data) {
        document.getElementById('digi-price-btc').append(`USD: ${data.DGB.USD}`)
        document.getElementById('digi-price-usd').append(`BTC: ${data.DGB.BTC}`)
    });        
 }

 // Browser Action
chrome.browserAction.onClicked.addListener(getDigibytePrice());
