var resultDiv = document.getElementById("result");
var buttonStart = document.querySelector("#start");
var buttonStop = document.querySelector("#stop");

if (window.Worker) {
  var pollWorker = new Worker("worker.js");
  var intervalId;
  buttonStart.onclick = () => {
    pollWorker.postMessage(false);
    console.log("request made");
  };
  buttonStop.onclick = () => {
    pollWorker.postMessage(intervalId);
    resultDiv.textContent = "stopped";
  };

  pollWorker.onmessage = e => {
    intervalId = e.data.intervalId;
    resultDiv.textContent = `USD/Bitcoin : ${e.data.data.USD.symbol}${
      e.data.data.USD.last
    }`;
    console.log("received data");
  };
}
