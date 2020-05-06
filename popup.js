function getDigibytePrice() {        
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=DGB&tsyms=USD')
    .then((res) => res.json())
    .then(function(data) {
        document.getElementById('digi-price').append(`$${data.DGB.USD}`)
    });        
 }

 // Browser Action
chrome.browserAction.onClicked.addListener(getDigibytePrice());
