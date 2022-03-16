// import React, { useEffect } from "react";

// const LiveGraph = () => {
//   useEffect(() => {
//     let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
//     // let stockPriceElement = document.getElementById("stock-price");
//     let lastPrice = null;

//     ws.onmessage = (evt) => {
//       let stockObject = JSON.parse(evt.data);
//       console.log(connected);
//       console.log(stockObject);
//       let price = parseFloat(stockObject.p).toFixed(4);
//       stockPriceElement.innerText = price;
//       stockPriceElement.style.color =
//         !lastPrice || lastPrice === price
//           ? "black"
//           : price > lastPrice
//           ? "green"
//           : "red";
//       lastPrice = price;
//     };
//   }, []); // run this onload
//   return <div>LiveGraph</div>;
// };

// export default LiveGraph;
const WebSocket = require("ws");
let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
// let stockPriceElement = document.getElementById("stock-price");
let lastPrice = null;

ws.onmessage = (evt) => {
  let stockObject = JSON.parse(evt.data);
  console.log("refreshed");
  console.log(stockObject);
  let price = parseFloat(stockObject.p).toFixed(4);
  console.log(price);
};
