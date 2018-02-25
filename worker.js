onmessage = function(e) {
  fetch("https://exchange.bitcoin/api/trades?since=5").then(res => {
    postMessage(JSON.stringify(res.json(), null, 2));
  });
};
