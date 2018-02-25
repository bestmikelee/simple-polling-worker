var resultDiv = document.getElementById("result");
var button = document.querySelector("button");

if (window.Worker) {
  var pollWorker = new Worker("worker.js");
  button.onclick = () => {
    pollWorker.postMessage();
    console.log("request made");
  };

  pollWorker.onmessage = e => {
    resultDiv.textContent = e.data;
    console.log("received data");
  };
}
