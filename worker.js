onmessage = function(e) {
  var stopIntervalId = e.data;
  if (stopIntervalId) {
    clearInterval(stopIntervalId);
  } else {
    var interval = setInterval(() => {
      fetch("https://blockchain.info/ticker", {
        mode: "cors",
        cache: "no-cache"
      })
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          var msg = {
            intervalId: interval,
            data: data
          };
          postMessage(msg);
        });
    }, 2000);
  }
};
